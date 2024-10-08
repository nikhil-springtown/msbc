"use client";

import React, { useEffect, useState } from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '@/lib/slices/form-slice';
import { enquiryformSchema, fieldFormSchema } from '@/helper/schema';
import { breakData, createZodValidation, dateFormatter, getNumber, putValues, toSnakeCase } from '@/utils/constants';
import { CustomFields } from '@/components/custom-fields';
import { addEnquiry } from '@/lib/slices/list-slice';
import { useToast } from '@/components/ui/use-toast';
import { clearForm } from '@/lib/slices/form-slice';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { customerData, enquiryData, fieldData, projectData } from '@/utils/data';
import { DynamicFields } from '@/components/dynamic-fields';
import { MdDelete } from "react-icons/md";
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomGrid } from '@/components/grid';

const Add = () => {

    const { toast } = useToast();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const sections = breakData(enquiryData, [ 'enquiry_by', 'billing_address', 'notes' ])

    const [sectionData, setSectionData] = useState([ sections[0], sections[1], sections[2] ]);
    const [required, setRequired] = useState(false);
    const [sectionId, setSectionId] = useState(0);

    const [labelNames, setLabelNames] = useState([]);
    const [options, setOptions] = useState(['']);

    const enquiryForm = useForm({
        resolver: zodResolver(createZodValidation(sectionData[0])),
        defaultValues: putValues(sectionData[0], 'no-default')
    });

    const customerForm = useForm({
        resolver: zodResolver(createZodValidation(sectionData[1])),
        defaultValues: putValues(sectionData[1], 'no-default')
    });

    const projectForm = useForm({
        resolver: zodResolver(createZodValidation(sectionData[2])),
        defaultValues: putValues(sectionData[2], 'no-default')
    });

    const form = [ enquiryForm, customerForm, projectForm ];

    const form2 = useForm({
        resolver: zodResolver(createZodValidation(fieldData)),
        defaultValues: putValues(fieldData)
    })

    function onSubmit(values) {

        console.log(values);

        // toast({ title: "Enquiry added successfully !", className: 'bg-green-100 border-green-300 text-green-600' });
        
        // const newValue = { ...values, enquiry_no: getNumber(), enquiry_date: dateFormatter(values.enquiry_date) }
        // dispatch(updateForm(newValue));
        // dispatch(addEnquiry(newValue));
        // dispatch(clearForm());
        // router.push('/enquiry');
        
    }

    const returnType = (field_type, value_type) => {

        if (value_type === 'type') {

            if (field_type === 'String') return 'text';
    
            if (field_type === 'Date') return 'date';
    
            if (field_type === 'Number') return 'number';
    
            if (field_type === 'Select') return 'select';
    
            if (field_type === 'Multi-Select') return 'multi-select';
    
            if (field_type === 'Checkbox') return 'checkbox';

            if (field_type === 'Multi-Checkbox') return 'multi-checkbox';

            if (field_type === 'Textarea') return 'textarea';

        }

        if (field_type === 'Select') return '';

        if (field_type === 'Checkbox') return false;

        if (field_type === 'Multi-Select' || field_type === 'Multi-Checkbox') return [];

        if (field_type === 'Date') return new Date().toISOString();

        return '';


    }

    const handleClose2 = () => {

        setOpen2(false);
        form2.reset()

    }

    function onSubmit2(values) {

        let newObj = {};

        console.log(fieldData)

        newObj['label'] = values.label_name;
        newObj['type'] = returnType(values.field_type, 'type');
        newObj['value'] = returnType(values.field_type, 'value');
        newObj['required'] = required
        newObj['is_visible'] = true
        newObj['read_only'] = false


        if (values.field_type === 'Select' || values.field_type === 'Multi-Select' || values.field_type === 'Multi-Checkbox') {

            newObj['list'] = [ ...options ];

        }

        if (values.field_type === 'Number') {

            newObj['validation'] = { min: 10, max: 10 };

        }

        const newArr = sectionData.map((x, i) => {
            if (i === sectionId) return [ ...x, { id: x[x.length - 1].id + 1, ...newObj} ]
            return x;
        });

        setSectionData(newArr);
        setLabelNames(newArr);

        console.log(newArr);

        handleClose2();
        setOptions(['']);
        toast({ title: "Field has been created successfully !", className: 'bg-green-100 border-green-300 text-green-600' });
        
    }

    const handleCancel = () => {

        router.push('/enquiry');

    }

    const handleOpen = (id) => {

        setSectionId(id);
        setLabelNames([ ...sectionData[id] ]);
        setOpen(true);

    }

    const handleClose = () => {

        setLabelNames([ ...sectionData[sectionId] ]);
        setOpen(false);

    }


    const handleOpen2 = (id) => {

        setSectionId(id);
        setOpen2(true);

    }

    const handleLabelChange = (e, i) => {

        const allLabels = labelNames.map((x, ind) => {
            if (i == ind) return { ...x, label: e.target.value };
            return x;
        })

        setLabelNames(allLabels);

    }

    const handleLabelSave = () => {

        const newData = sectionData.map((x, i) => {
            
            if (i === sectionId) return [ ...labelNames ];

            return x;

        })
        setSectionData(newData);
        setOpen(false);
    }

    const handleClose3 = () => {
        setOpen3(false);
        setOptions(['']);
    }

    const handleOpen3 = () => {
        setOpen3(true);
    }

    const checkIsItDropdown = (field) => {

        const type = field.control._formValues.field_type;

        if (type === 'Select' || type === 'Multi-Select' ||  type === 'Checkbox') {

            return true;

        }
        
        return false;

    }

    const handleOptionChange = (e, i) => {

        const newValues = options.map((x, ind) => {
            if (ind === i) return e.target.value;
            return x;
        });

        setOptions(newValues);

    }

    const handleAddOption = () => {

        const newArr = [ ...options ];
        newArr.push('');
        setOptions(newArr);

    }

    const handleDeleteOption = (i) => {

        const newArr = options.filter((_,ind) => ind !== i);
        setOptions(newArr);

    }

    const handleSave3 = () => {

        setOpen3(false);

    }

    return (

        <Container id={4}>

            <Tabs defaultValue="enquiry-details" className='w-full'>
                
                <TabsList>
                    <TabsTrigger value="enquiry-details" disabled>Enquiry Details</TabsTrigger>
                </TabsList>

                <TabsContent value="enquiry-details" className="w-full">

                    <Dialog open={open} onOpenChange={handleClose}>

                        <DialogContent className="sm:max-w-[425px]">

                            <DialogHeader>
                                <DialogTitle>Edit Labels</DialogTitle>
                                <DialogDescription>
                                    Rename labels to your fields.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="flex flex-col items-center gap-3 h-[300px] py-4 w-full overflow-auto">
                                
                                {labelNames.map((v, i) => (
                                    <Input type='text' key={`label-${i}`} className='w-[97%]' value={v.label} onChange={(e) => handleLabelChange(e, i)} />
                                ))}

                            </div>

                            <DialogFooter>
                                <Button type="button" variant='secondary' onClick={handleClose}>Cancel</Button>
                                <Button type="button" onClick={handleLabelSave}>Save</Button>
                            </DialogFooter>

                        </DialogContent>

                    </Dialog>

                    <Dialog open={open2} onOpenChange={handleClose2}>

                        <DialogContent className="sm:max-w-[425px]">

                            <DialogHeader>
                                <DialogTitle>Add Field</DialogTitle>
                                <DialogDescription>
                                    Add field in the section.
                                </DialogDescription>
                            </DialogHeader>

                            <Form {...form2}>
                                <form onSubmit={form2.handleSubmit(onSubmit2)}>
                                    <div className='flex gap-3 items-center mb-4'>
                                        <div className='flex flex-col gap-3 items-center w-full'>

                                            {fieldData.map((v, i) => {

                                                if (v.type === 'select' || v.type === 'multi-select' || v.type === 'checkbox') {

                                                    return (
                                                        <CustomFields key={`field-${i}`} className='w-full' form={form2} type={v.type} name={toSnakeCase(v.label)} label={v.label} placeholder={`Choose ${v.label}`} list={v.list} />
                                                    )

                                                }

                                                return (
                                                    <CustomFields key={`field-${i}`} className='w-full' form={form2} type={v.type} name={toSnakeCase(v.label)} label={v.label} placeholder={`Enter ${v.label}`} />
                                                )

                                            })}

                                        </div>

                                        
                                    </div>

                                    <div className='flex items-center w-full gap-3 my-3'>
                                        <div className='flex items-center'><Checkbox checked={required} onCheckedChange={() => setRequired(!required)} /></div>
                                        <div className='text-sm'>Required</div>
                                    </div>

                                    <DialogFooter>
                                        {checkIsItDropdown(form2) && <Button type="button" variant='secondary' onClick={handleOpen3}>Add Options</Button>}
                                        <Button type="button" variant='secondary' onClick={handleClose2}>Cancel</Button>
                                        <Button type='submit' onSubmit={form2.handleSubmit(onSubmit2)}>Save</Button>
                                    </DialogFooter>
                                </form>
                            </Form>

                        </DialogContent>

                    </Dialog>

                    <Dialog open={open3} onOpenChange={handleClose3}>

                        <DialogContent className="sm:max-w-[425px]">

                            <DialogHeader>
                                <DialogTitle>Add Options</DialogTitle>
                                <DialogDescription>
                                    Add options to the field.
                                </DialogDescription>
                            </DialogHeader>

                            <div className='min-h-[70px] max-h-[200px] overflow-auto'>
                                
                                <div className='flex flex-col gap-2 m-2'>

                                {options.map((x, i) => (

                                        <div key={`select-options-${i}`} className='flex items-center gap-2 w-full'>

                                            <div className='w-[75%]'>
                                                <Input value={x} onChange={(e) => handleOptionChange(e, i)} />
                                            </div>

                                            <div className='w-[25%]'>
                                                {/* <button disabled={i === 0} className={`${i === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'} rounded-full p-2 transition-all duration-200 w-full`} onClick={() => handleDeleteOption(i)}>
                                                    <MdDelete size={20} />
                                                </button> */}
                                                <Button type='button' disabled={i === 0} onClick={() => handleDeleteOption(i)} variant='secondary'>Remove</Button>
                                            </div>

                                        </div>

                                ))}

                                </div>

                            </div>

                            <DialogFooter>
                                <Button type="button" variant='secondary' onClick={handleClose3}>Cancel</Button>
                                <Button type="button" onClick={handleAddOption}>Add</Button>
                                <Button type="button" onClick={handleSave3}>Save</Button>
                            </DialogFooter>

                        </DialogContent>

                    </Dialog>

                    <div className='flex flex-wrap gap-3 w-full'>

                        <Card className="w-full">

                            <CardHeader>

                                <div className='flex justify-between w-full'>
                                    <div>
                                        <CardTitle>Enquiry Details</CardTitle>
                                        <CardDescription>Fill out all necessary enquiry details</CardDescription>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <Button type='button' variant='secondary' onClick={() => handleOpen(0)}>Edit Labels</Button>
                                        <Button type='button' onClick={() => handleOpen2(0)}>Add Field</Button>
                                    </div>
                                </div>

                            </CardHeader>

                            <CardContent>

                                <Form {...form[0]}>

                                    <form onSubmit={form[0].handleSubmit(onSubmit)}>

                                        <CustomGrid row={3}>
                                            <DynamicFields data={sectionData[0]} form={form[0]} />
                                        </CustomGrid>

                                        <div className='flex justify-end w-full mr-5'>
                                            <Button>Update</Button>
                                        </div>

                                    </form>

                                </Form>

                            </CardContent>


                        </Card>

                        <Card className="w-full">

                            <CardHeader className='flex flex-row justify-between'>
                            
                                <div className='flex justify-between w-full'>
                                    <div>
                                        <CardTitle>Customer Details</CardTitle>
                                        <CardDescription>Fill out all necessary customer details</CardDescription>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <Button type='button' variant='secondary' onClick={() => handleOpen(1)}>Edit Labels</Button>
                                        <Button type='button' onClick={() => handleOpen2(1)}>Add Field</Button>
                                    </div>
                                </div>

                            </CardHeader>

                            <CardContent>

                                <Form {...form[1]}>

                                    <form onSubmit={form[1].handleSubmit(onSubmit)}>

                                        <CustomGrid row={3}>
                                            <DynamicFields data={sectionData[1]} form={form[1]} />
                                        </CustomGrid>

                                        <div className='flex justify-end w-full mr-5'>
                                            <Button>Update</Button>
                                        </div>

                                    </form>

                                </Form>

                            </CardContent>

                        </Card>

                        <Card className="w-full">

                            <CardHeader>
                                <div className='flex justify-between w-full'>
                                    <div>
                                        <CardTitle>Project Details</CardTitle>
                                        <CardDescription>Fill out all necessary project details</CardDescription>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <Button type='button' variant='secondary' onClick={() => handleOpen(2)}>Edit Labels</Button>
                                        <Button type='button' onClick={() => handleOpen2(2)}>Add Field</Button>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent>

                                <Form {...form[2]}>

                                    <form onSubmit={form[2].handleSubmit(onSubmit)}>

                                        <CustomGrid row={3}>
                                            <DynamicFields data={sectionData[2]} form={form[2]} />
                                        </CustomGrid>

                                        <div className='flex justify-end w-full mr-5'>
                                            <Button>Update</Button>
                                        </div>

                                    </form>

                                </Form>

                            </CardContent>

                        </Card>

                        <div className='flex justify-end gap-3 w-full'>
                            <Button variant="secondary" type='button' onClick={handleCancel}>Cancel</Button>
                            {/* <Button type="submit">Save</Button> */}
                        </div>

                    </div>

                </TabsContent>
            
            </Tabs>

        </Container>

    );

}

export default Add