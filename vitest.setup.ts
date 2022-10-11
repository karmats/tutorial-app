import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { expect, vi } from "vitest";

expect.extend(matchers);
global.CSS = { supports: vi.fn() } as any;
