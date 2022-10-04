import { createPinia, setActivePinia } from "pinia";
import { useCounterStore } from "../counter";

describe("CounterStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("increments", () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);

    counterStore.increment();

    expect(counterStore.count).toBe(1);
  });

  it("double counts", () => {
    const counterStore = useCounterStore();

    expect(counterStore.doubleCount).toBe(0);

    counterStore.increment();
    counterStore.increment();

    expect(counterStore.count).toBe(2);
    expect(counterStore.doubleCount).toBe(4);
  });
});
