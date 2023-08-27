"use client"
import { Button, ButtonGroup } from '@nextui-org/react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ChevronDownIcon, LayoutGridIcon, ListIcon, Plus } from "lucide-react";
import React, { useMemo, useRef, useState } from "react";
import EmployeeTable from "../../_components/employee.table";
import EmployeeList from "../../_components/employee.list";
import { AddEmpolyeeForm } from "../../_components/forms/employee/addEmployee";
import { useRouter } from 'next/navigation';

const EmployeePage = () => {
	const [isGridView, setIsGridView] = useState(false)
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]))
    
	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(", ").replaceAll("_", ""),
		[selectedKeys]
	);

	// const createRef = useRef();
	const [addModal, setAddModal] = useState(false)
	const router = useRouter();

	return (
		<>
			<div className="container">
				<div className="flex flex-col col-span-6 md:col-span-8 ">
					<div className="flex justify-between py-10">
						<div className="">
							<h2 className="text-3xl text-white font-bold">Employees</h2>
						</div>
						<Button 
							color="warning"
							radius="full"
							startContent={<Plus/>}
							onClick={() => router.push('/employee/addEmployee')}
						>
							Add Employee					
						</Button>
					</div>
					<div className="flex justify-between ">
						<div className="flex flex-grid gap-2">
							<div className="">
								<ButtonGroup color="primary" variant="bordered" size="md" radius="full">
									<Button variant="flat">{selectedValue} </Button>
									<Dropdown placement="bottom-end" >
										<DropdownTrigger>
											<Button variant="flat" isIconOnly> 
												<ChevronDownIcon />
											</Button>
										</DropdownTrigger>
										<DropdownMenu
											disallowEmptySelection
											aria-label="Single selection action"
											variant="flat"
											selectionMode="single"
											selectedKeys={selectedKeys}
											// onSelectionChange={setSelectedKeys}
										>
											<DropdownItem  key="new">New</DropdownItem>
											<DropdownItem key="old">Old</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</ButtonGroup>
							</div>
							<div className="">
								<ButtonGroup variant="bordered">
									<Button>{selectedValue}</Button>
									<Dropdown placement="bottom-end">
										<DropdownTrigger>
											<Button isIconOnly> 
												<ChevronDownIcon color="white"/>
											</Button>
										</DropdownTrigger>
										<DropdownMenu
											disallowEmptySelection
											aria-label="Single selection action"
											selectionMode="single"
											variant="flat"
											selectedKeys={selectedKeys}
											// onSelectionChange={setSelectedKeys}
										>
											<DropdownItem key="active">Active</DropdownItem>
											<DropdownItem key="unActive">Not Active</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</ButtonGroup>
							</div>
							<div className="">
								<ButtonGroup variant="flat">
									<Button>{selectedValue} </Button>
									<Dropdown placement="bottom-end">
										<DropdownTrigger>
											<Button isIconOnly> 
												<ChevronDownIcon color="white"/>
											</Button>
										</DropdownTrigger>
										<DropdownMenu
											disallowEmptySelection
											aria-label="Single selection action"
											selectionMode="single"
											selectedKeys={selectedKeys}
											// onSelectionChange={setSelectedKeys}
										>
											<DropdownItem key="designer">Designer</DropdownItem>
											<DropdownItem key="artist">Artist</DropdownItem>
											<DropdownItem key="cleaner">Cleaner</DropdownItem>
											<DropdownItem key="carpenter">Carpenter</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</ButtonGroup> 
							</div>
						</div>

						
						<div className="flex gap-3 items-center">
							{/* <Switch 
							defaultSelected
							color="warning"
							size="lg"
							startContent={<GridIcon size={28}/>}
							endContent={<LayoutListIcon/>}
							/> */}
							<ButtonGroup>
								<Button 
									isIconOnly
									color="warning"
									onClick={() => setIsGridView(true)}
								>
									<LayoutGridIcon/>
								</Button>
								<Button 
									isIconOnly 
									color="warning"
									onClick={() => setIsGridView(!isGridView)}
								>
									<ListIcon/>
								</Button>
							</ButtonGroup>
							
						</div>
					</div>
				</div>

				<div className="py-7">
					{/* <EmployeeTable/> */}
					{ isGridView ? <EmployeeList/> : <EmployeeTable/> }
					{/* <EmployeeList/> */}
				</div>
				{/* { addModal && <AddEmpolyeeForm />} */}

				

			</div>
		</>
		
	);
}

export default EmployeePage;
