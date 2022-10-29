const URL = "//salespower.invalid/api/address";
function Address() {
  const onSubmit = (evt) => {
    const data = Object.fromEntries(
      Array.from(evt.target.elements)
        .slice(0, 6)
        .map((input) => [input.name, input.value])
    );
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    evt.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        Address line 1:
        <input name="address1" />
      </label>
      <label>
        Address line 2:
        <input name="address2" />
      </label>
      <label>
        Zip:
        <input name="zip" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        State:
        <input name="state" />
      </label>
      <label>
        Country:
        <input name="country" />
      </label>
      <button>Submit</button>
    </form>
  );
}
export default Address;
