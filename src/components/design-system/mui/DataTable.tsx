"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Column<T> {
  key: keyof T & string;
  label: string;
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  rows: T[];
  rowKey: keyof T & string;
  stickyHeader?: boolean;
  maxHeight?: number;
}

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  rowKey,
  stickyHeader = false,
  maxHeight,
}: DataTableProps<T>) {
  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{
        borderRadius: 3,
        ...(maxHeight ? { maxHeight } : {}),
      }}
    >
      <Table stickyHeader={stickyHeader} size="medium">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.key}
                align={col.align || "left"}
                sx={{ fontWeight: 700, bgcolor: "grey.50" }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={String(row[rowKey])} hover>
              {columns.map((col) => (
                <TableCell key={col.key} align={col.align || "left"}>
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
