import { StatusColorMap } from "@/types";
import { Avatar, Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";
import { MoreVerticalIcon } from "lucide-react";
import { useCallback } from "react";

// interface Employee {
//     name: string;
// }

// const statusColorMap:StatusColorMap = {
//     active: "success",
//     inActive: "danger",
//     paused: "primary",
//     vacation: "warning",
// };

export const columns = [
    {
        name: "ID",
        uid: "id", 
        sortable: true
    },
    {
        name: "Employee Name", 
        uid: "employeeName", 
        sortable: true
    },
    {
        name: "Designation", 
        uid: "designation", 
        sortable: true
    },
    {
        name: "Status", 
        uid: "status", 
        sortable: true
    },
    {
        name: "Email", 
        uid: "email"},
    {
        name: "Moblie Number", 
        uid: "mobile"},
    {
        name: "Department", 
        uid: "department", 
        sortable: true
    },
    {
        name: "Team", 
        uid: "team", 
        sortable: true
    },
    {
        name: "Date of Joining", 
        uid: "joiningDate",
        sortable: true
    },
    {
        name: "Actions", 
        uid: "actions"
    },
];

