// js example

export const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// <button onClick="myClickHandler">Click Me!</button>
function myClickHandler(this: HTMLButtonElement, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
  this.disabled = true;
}
