import LinkedList from "../LinkedList";

describe("LinkList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");
  });

  it("should append node to linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();

    linkedList.append(1);
    expect(linkedList.head.value).toBe(1);
  });
});
