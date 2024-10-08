import { dateFormatter } from "./constants";

export const enquiryData = [

    {
        id: 1,
        label: 'Enquiry No',
        name: 'Enquiry No',
        type: 'text',
        value: 'New Enquiry',
        required: true,
        is_visible: true,
        read_only: true
    },
  
    {
        id: 2,
        label: 'Enquiry Date',
        name: 'Enquiry Date',
        type: 'date',
        value: dateFormatter(new Date()),
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 3,
        label: 'Type',
        name: 'Type',
        type: 'multi-select',
        list: [ 'Trade', 'Contract', 'Phone Marketing', 'Retail', 'Villas', 'Projects' ],
        value: [ 'Trade' ],
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 4,
        label: 'Branch',
        name: 'Branch',
        type: 'select',
        value: 'Head Office',
        list: [ 'Head Office' ],
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 5,
        label: 'Status',
        name: 'Status',
        type: 'select',
        value: 'Lead In',
        list: [ 'Lead In', 'Quote In Progress', 'Waiting Information - Cost.', 'Lost', 'Quote Ready', 'Waiting Information - Supl.' ],
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 6,
        label: 'By',
        name: 'By',
        type: 'select',
        value: 'User',
        list: [ 'Admin', 'User', 'Sales' ],
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 7,
        label: 'Estimator',
        name: 'Estimator',
        type: 'select',
        value: '',
        list: [ 'Admin', 'User', 'Sales' ],
        required: false,
        is_visible: true,
        read_only: true
    },
  
    {
        id: 8,
        label: 'Sales Representative',
        name: 'Sales Representative',
        type: 'select',
        value: 'User',
        list: [ 'Admin', 'User', 'Sales' ],
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 9,
        label: 'Enquiry By',
        name: 'Enquiry By',
        type: 'multi-checkbox',
        list: [ 'PHONE', 'E-MAIL', 'MARKETING' ],
        value: ['phone'],
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 10,
        label: 'Customer',
        name: 'Customer',
        type: 'select',
        list: [],
        value: '',
        required: false,
        is_visible: true,
        read_only: false
    },

    {
        id: 11,
        label: 'Contact Name',
        name: 'Contact Name',
        type: 'text',
        value: '',
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 12,
        label: 'Customer Email',
        name: 'Email',
        type: 'text',
        value: '',
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 13,
        label: 'Mobile No',
        name: 'Mobile No',
        type: 'number',
        value: '',
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 14,
        label: 'Phone No',
        name: 'Phone No',
        type: 'number',
        value: '',
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 15,
        label: 'Country',
        name: 'Country',
        type: 'select',
        list: ['India', 'US', 'UK'],
        value: '',
        required: false,
        is_visible: true,
        read_only: false
    },

    {
        id: 16,
        label: 'Post Code',
        name: 'Pin Code',
        type: 'number',
        value: '',
        validation: { min: 6, max: 6 },
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 17,
        label: 'Address',
        name: 'Address',
        type: 'textarea',
        value: '',
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 18,
        label: 'Delivery Address',
        name: 'Shipping Address',
        type: 'textarea',
        value: '',
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 19,
        label: 'Billing Address',
        name: 'Billing Address',
        type: 'textarea',
        value: '',
        required: false,
        is_visible: true,
        read_only: true
    },

    {
        id: 20,
        label: 'Project Name',
        name: 'Project Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 21,
        label: 'Architect Name',
        name: 'Architect Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 22,
        label: 'Site Reference',
        name: 'Site Reference',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 23,
        label: 'Tentative Project Value',
        name: 'Tentative Project Value',
        type: 'number',
        value: '',
        validation: { min: 1, max: 5 },
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 24,
        label: 'Notes',
        name: 'Notes',
        type: 'textarea',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },
  
];

export const branchData = [

    {
        id: 1,
        name: 'Company Name',
        label: 'Company Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 2,
        label: 'Branch Code',
        name: 'Branch Code',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },
  
    {
        id: 3,
        label: 'Branch Name',
        name: 'Branch Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
        
    },

    {
        id: 4,
        label: 'Email',
        name: 'Email',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 5,
        label: 'Country',
        name: 'Country',
        type: 'select',
        list: [ 'Mumbai - India', 'Paris - France', 'Stockholm - Sweden', 'Ireland',
                'Osaka - Japan', 'Seoul - South Korea', 'Tokyo - Japan', 'Singapore',
                'Sydney - Australia', 'Central - Canada', 'São Paulo - Brazil',
                'Northern Virginia - USA', 'Ohio - USA', 'Northern California - USA',
                'Oregon - USA', 'Bahrain' ],
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 6,
        label: 'Mobile No.',
        name: 'Mobile No.',
        type: 'number',
        value: null,
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 7,
        label: 'Head Office',
        name: 'Is HeadOffice',
        type: 'checkbox',
        value: false,
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 8,
        label: 'Address',
        name: 'Address',
        type: 'textarea',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    }

]

export const userData = [

    {
        id: 1,
        name: 'First Name',
        label: 'First Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 2,
        name: 'Last Name',
        label: 'Last Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 3,
        name: 'Email',
        label: 'Email',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 4,
        name: 'Password',
        label: 'Password',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 5,
        name: 'Phone',
        label: 'Phone',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 6,
        name: 'Address',
        label: 'Address',
        type: 'textarea',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

]

export const organizationData = [

    {
        id: 1,
        name: 'Name',
        label: 'Organization Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 2,
        name: 'Contact Name',
        label: 'Contact Person Name',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 3,
        name: 'Email',
        label: 'Email',
        type: 'text',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 4,
        name: 'Phone No.',
        label: 'Phone No.',
        type: 'number',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 5,
        name: 'Mobile No.',
        label: 'Mobile No.',
        type: 'number',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 6,
        name: 'Pin Code',
        label: 'Pin Code',
        type: 'number',
        validation: { min: 6, max: 6 },
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 7,
        name: 'Notes',
        label: 'Notes',
        type: 'textarea',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 8,
        name: 'Address',
        label: 'Address',
        type: 'textarea',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 9,
        name: 'Shipping Address',
        label: 'Delivery Address',
        type: 'textarea',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

    {
        id: 10,
        name: 'Billing Address',
        label: 'Billing Address',
        type: 'textarea',
        value: '',
        required: true,
        is_visible: true,
        read_only: false
    },

]

export const fieldData = [

    {
        id: 1,
        label: 'Field Name',
        type: 'text',
        value: '',
        required: true
    },

    {
        id: 2,
        label: 'Label Name',
        type: 'text',
        value: '',
        required: true
    },

    {
        id: 3,
        label: 'Field Type',
        type: 'select',
        list: [ 'Date', 'String', 'Number', 'Checkbox', 'Select', 'Multi-Select', 'Textarea' ],
        value: '',
        required: true
    },

]

