"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type Applications = {
  id: string;
  name: string;
  discord: string;
  email: string;
  year: "Freshmen" | "Sophomore" | "Junior" | "Senior" | "Graduate";
  status: "Scheduled" | "No Show" | "Completed" | "TBD";
};

export const columns: ColumnDef<Applications>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "discord",
    header: "discord",
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "year",
    header: "year",
  },
  {
    accessorKey: "status",
    header: "status",
  },
];

export const mock: Applications[] = [
  {
    id: "728ed52f",
    name: "Divyank Shah",
    discord: "webdiv",
    year: "Graduate",
    email: "webdiv@gmail.com",
    status: "No Show",
  },
  {
    id: "728ed52g",
    name: "Andrew Khadder",
    discord: "khandrew1",
    year: "Senior",
    email: "khandrew1@gmail.com",
    status: "Completed",
  },
  {
    id: "728ed52f",
    name: "Divyank Shah",
    discord: "webdiv",
    year: "Graduate",
    email: "webdiv@gmail.com",
    status: "No Show",
  },
  {
    id: "728ed52g",
    name: "Andrew Khadder",
    discord: "khandrew1",
    year: "Senior",
    email: "khandrew1@gmail.com",
    status: "Completed",
  },
  {
    id: "728ed52f",
    name: "Divyank Shah",
    discord: "webdiv",
    year: "Graduate",
    email: "webdiv@gmail.com",
    status: "No Show",
  },
  {
    id: "728ed52g",
    name: "Andrew Khadder",
    discord: "khandrew1",
    year: "Senior",
    email: "khandrew1@gmail.com",
    status: "Completed",
  },
];
