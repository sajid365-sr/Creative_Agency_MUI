
import { Box } from '@mui/material';
import React from 'react';
import CreativeAccordion from '../../../components/CreativeAccordion/CreativeAccordion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Faq = () => {
    return (
        <Box sx={{
            mb:20,
            }}>
            <SectionTitle title='Frequently asked'  colored='Question' />
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                mt:8,
                gap:2
            }}>
            <CreativeAccordion title='How do i pay for the Essentials or Premium plan?' description='You can  pay with a credit card or a via nt banking (if ' />
            <CreativeAccordion title='How do i pay for the Essentials or Premium plan?' description='You can  pay with a credit card or a via nt banking (if ' />
            <CreativeAccordion title='How do i pay for the Essentials or Premium plan?' description='You can  pay with a credit card or a via nt banking (if ' />
            <CreativeAccordion title='How do i pay for the Essentials or Premium plan?' description='You can  pay with a credit card or a via nt banking (if ' />
            </Box>
        </Box> 
    );
};

export default Faq;