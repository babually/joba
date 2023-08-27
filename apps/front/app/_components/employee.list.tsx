import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { MailIcon, MoreVerticalIcon, PhoneCallIcon } from "lucide-react";
import { employees } from '../../components/data'

const statusColorMap = {
    active: "success",
    inActive: "danger",
    paused: "primary",
    vacation: "warning",
};

// interface Employee {
//     employeeName: string;
//     designation: string;
//     email: string;
//     dob: string;
//     department: string;
//     team: string;
//     status: string;
//     mobile: string;
//     birthPlace: string;
//     joiningDate: string;
//     avatar: string;
// }


export default function EmployeeList() {
    return (
        <div className="container py-7 gap-4 grid grid-cols-5 sm:grid-cols-2 md:grid-cols-5">
            {employees.map((employee, index) => (
                <Card className="py-1">
                    <CardHeader className="justify-end">
                        <div className="items-end">
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
                        
                    </CardHeader>
                    <CardBody className="py-1">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2 px-2 items-center">
                                <Avatar
                                    size="lg"
                                    radius="full"
                                    src={employee.avatar}
                                    className="transition-transform text-white items=center"
                                />
                                <div className="flex flex-col gap-1 items-center">
                                    <h4 className="text-small font-semibold loeading-none text-default-600">
                                        {employee.employeeName}
                                    </h4>
                                    <h5 className="text-small  tracking-tight text-default-500">
                                        {employee.designation}
                                    </h5>
                                </div>
                                <Chip className="capitalize items-center" size="md" variant="bordered">
                                    {employee.status}
                                </Chip>
                            </div>
                            <div className="px-2 flex flex-col gap-1 justify-start">
                                <div className="flex flex-row gap-2">
                                    <span className="">
                                        <MailIcon size={18}/>
                                    </span>
                                    <p className="text-small  tracking-tight text-default-400">
                                        {employee.email}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <span className="">
                                        <PhoneCallIcon size={18}/>
                                    </span>
                                    <p className="text-small  tracking-tight text-default-400">
                                        {employee.mobile}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </CardBody>
                    <CardFooter className="mx-2">
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row gap-14 justify-between">
                                <p className="font-semibold text-small text-default-400">
                                    Department:
                                </p>
                                <p className="font-semibold text-small text-default-500">
                                    {employee.department}
                                </p>
                            </div>
                            <div className="flex flex-row gap-12 justify-between">
                                <p className="font-semibold text-small text-default-400">
                                    Date of Joining:
                                </p>
                                <p className="font-semibold text-small text-default-500">
                                    {employee.joiningDate}
                                </p>
                            </div>
                        </div>
                        
                    </CardFooter>
                </Card>
            ))}
        </div>

    );
}