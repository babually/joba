"use client"


import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function JobsPage() {
	const router = useRouter();
	return (
		<div className="container">
			<div className="flex flex-col col-span-6 md:col-span-8 ">
			    <div className="flex justify-between py-10">
					<div className="">
						<h2 className="text-3xl text-white font-bold">Jobs</h2>
					</div>
					<Button 
						color="warning"
						radius="full"
						startContent={<Plus/>}
						onClick={() => router.push('/jobs/addJob')}
					>
						Add Job					
					</Button>
				</div>
			</div>
			<div className=""></div>
			
		</div>
	);
}
