import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import { columns } from "./columns";
import React, { useCallback, useState } from "react";
import { employees } from "@/components/data";
import { ChevronDownIcon, MoreVerticalIcon, SearchIcon } from "lucide-react";
import { capitalize } from "@/config/utils";
import { StatusColorMap } from "@/types";


const initial_visible_columns = ["Employee Name", "Designation", "Status", "Email", "Mobile Number", "Department", "Team", "Date of Joining", "Actions"];


// const statusColorMap:StatusColorMap = {
//     active: "success",
//     inActive: "danger",
//     paused: "primary",
//     vacation: "warning",
// };

const statusOptions = ["active", "InActive", "paused", "vacation"];

export default function EmployeeTable() {
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(initial_visible_columns))
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [sortDescriptor, setSortDescriptor] = useState({
        column: "status",
        direction: "ascending",
    });

    const [page, setPage] = useState(1);

    const pages = Math.ceil(employees.length / rowsPerPage);

    const hasSearchFilter = Boolean(filterValue)

    const headerColumns = React.useMemo(() => {
        // if (visibleColumns = "all") return columns;
        
        return columns.filter(
            (column) => Array.from(visibleColumns).includes(column.uid) 
        );

    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredEmployees = [...employees];

        if(hasSearchFilter) {
            filteredEmployees = filteredEmployees.filter((employee) =>
              employee.employeeName.toLowerCase().includes(filterValue.toLowerCase())
            );
        };

        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredEmployees = filteredEmployees.filter((employee) => 
                Array.from(statusFilter).includes(employee.status),
            );
        }

        return filteredEmployees;
    }, [employees, filterValue, statusFilter]);


    const items = React.useMemo(() => {
        const start = (pages - 1 ) * rowsPerPage;
        const end = start * rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    // const sortedItems = React.useMemo(() => {
    //     return [...items].sort((a, b) => {
    //         const first = a[sortDescriptor.column];
    //         const second = b[sortDescriptor.column];
    //         const cmp = first < second ? -1 : first > second ? 1 : 0;

    //         return sortDescriptor.direction === "descending" ? -cmp : cmp;
    //     });
    // }, [sortDescriptor, items]);

    const renderCell = useCallback((employee: any, columnKey: string | number) => {
        const cellValue = employee[columnKey];
    
        switch (columnKey) {
            case "name":
                return (
                    <User
                        name={employee.name}
                        className="transition-transform"
                        avatarProps={{
                            isBordered: true,
                            radius: "full",
                            src: `{employee.avatar}`,
                        }}
                    />
                );
            case "designation":
                return (
                    <div className="">
                        <p className="text-bold text-small capitalize">
                            {employee.designation}
                        </p>
                    </div>
                );
            case "status":
                return (
                    <Chip
                        className="capitalize border-none gap-1 text-default-600"
                        // color={statusColorMap}
                        size="md"
                        variant="flat"
                    >
                        {employee.status}
                    </Chip>
                );
            case "email":
                return (
                    <div className="">
                        <p className="text-bold text-small capitalize">
                            {employee.email}
                        </p>
                    </div>
                );
            case "mobile":
                return (
                    <div className="">
                        <p className="text-bold text-small capitalize">
                            {employee.mobile}
                        </p>
                    </div>
                );
            case "department":
                return (
                    <div className="">
                        <p className="text-bold text-small capitalize">
                            {employee.department}
                        </p>
                    </div>
                );
            case "team":
                return (
                    <div className="">
                        <p className="text-bold text-small capitalize">
                            {employee.team}
                        </p>
                    </div>
                );
            case "joiningDate":
                return (
                    <div className="">
                        <p className="text-bold text-small capitalize">
                            {employee.joiningDate}
                        </p>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown className="bg-background border-1 border-default-200">
                            <DropdownTrigger>
                                <Button isIconOnly radius="full" size="sm" variant="light">
                                   <MoreVerticalIcon className="text-default-400" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
    
        }
    
    
    }, [])

    const onRowsPerPageChange = React.useCallback((e: any) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
      }, []);
    
    
      const onSearchChange = React.useCallback((value: any) => {
        if (value) {
          setFilterValue(value);
          setPage(1);
        } else {
          setFilterValue("");
        }
      }, []);

      const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        classNames={{
                        base: "w-full sm:max-w-[44%]",
                        inputWrapper: "border-1",
                        }}
                        placeholder="Search by name..."
                        size="sm"
                        startContent={<SearchIcon className="text-default-300" />}
                        value={filterValue}
                        variant="bordered"
                        onClear={() => setFilterValue("")}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                   Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                // onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
      }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        employees.length,
        hasSearchFilter,
      ])
    

      const classNames = React.useMemo(
        () => ({
          wrapper: ["max-h-[382px]", "max-w-3xl"],
          th: ["bg-slate-100", "text-default-500", "border-b", "border-divider"],
          td: [
            // changing the rows border radius
            // first
            "group-data-[first=true]:first:before:rounded-none",
            "group-data-[first=true]:last:before:rounded-none",
            // middle
            "group-data-[middle=true]:before:rounded-none",
            // last
            "group-data-[last=true]:first:before:rounded-none",
            "group-data-[last=true]:last:before:rounded-none",
          ],
        }),
        [],
    );
    
    return (
        <div className="container bg-white py-4">
            <Table
                isCompact
                removeWrapper
                aria-label="Employee Table"
                classNames={classNames}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                // sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                // onSelectionChange={setSelectedKeys}
                // onSortChange={setSortDescriptor}
            >
                <TableHeader columns={columns}>
                {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No rows to display."} items={employees}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
        
    );

}