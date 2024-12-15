export type ITodoFilter = "all" | "active" | "completed";

export interface ITodoFilterListItem {
  value: ITodoFilter;
  label: string;
}
