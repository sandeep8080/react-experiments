# React Experiments

This repository is basically a playground to experiments and test out the myths and concepts of React. 


## Resetting React State When Props Change

In React, a component's internal state typically persists across prop changes. This can lead to scenarios where, for example, a child component retains its state even when its parent passes new props. 

A common pattern to reset a component's state when its props change is to use the `key` prop. When the `key` changes, React will unmount and remount the component, thereby resetting its internal state.

### Example Use Case

Suppose you have a parent component that renders a child component based on a selected value (e.g., a user ID from a dropdown). If the child component manages its own state (such as a user's name), switching between users via the dropdown will not reset the child's state by default. See below example:


```js
export const ResetStateExample = () => {
  // This component is used to demonstrate the reset state functionality
  const [userId, setUserId] = useState("");

  const handleDropdownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };
  return (
    <>
      <Dropdown handleDropdownChange={handleDropdownChange} />
      <UserInfoComponent userId={userId} />
    </>
  );
};
```

By passing a unique `key` (such as the `userId`) to the child component, you instruct React to treat each user as a separate instance. This ensures that the child component's state is reset whenever the `userId` changes.



### Key Takeaways

- **State Persistence:** React components retain their internal state across prop changes by default.
- **Resetting State:** Passing a unique `key` prop (e.g., `key={userId}`) to a component will force React to unmount and remount it, resetting its state.
- **Practical Benefit:** This pattern is useful when you want to ensure that a component's state does not persist across different prop values, such as when displaying user-specific information.

### References

- [React Documentation](https://react.dev/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes)