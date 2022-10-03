import "@testing-library/jest-dom";
import { vi } from "vitest";

global.CSS = { supports: vi.fn() } as any;
