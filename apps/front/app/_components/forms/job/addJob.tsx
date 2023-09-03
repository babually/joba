import { Formiz, useForm } from "@formiz/core";
import { Button, Input, Select, } from "@nextui-org/react";
import { User } from "lucide-react";

const AddJobForm = () => {
    const form = useForm();
    return (
        <>
          <div className="bg-white">
            <Formiz connect={form}>
                <Input
                    type="text"
                    label="Job Title"
                    placeholder="Enter Job Title"
                    labelPlacement="outside"
                    endContent={<User/>}
                />
                <Input
                    type="text"
                    label="Job Description"
                    placeholder="Enter Job Description"
                    labelPlacement="outside"
                    endContent={<User/>}
                />
                <Input
                    type="text"
                    label="Published Date"
                    placeholder="Enter Job Published Date"
                    labelPlacement="outside"
                    endContent={<User/>}
                />
                {/* <Select></Select> */}
                
                <Button color="primary">
                    Save
                </Button>
            </Formiz>
          </div>
        </>
    );
}

export default AddJobForm;