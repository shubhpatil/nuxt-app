import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import App from "~/pages/index.vue";

describe("Nuxt Test", () => {
  it("Root page test", async () => {
    const component = await mountSuspended(App);
    expect(component.html()).toContain("Nuxt");
  });
});
