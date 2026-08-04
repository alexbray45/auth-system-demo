function RememberMe({ checked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      Remember Me
    </label>
  );
}

export default RememberMe;
