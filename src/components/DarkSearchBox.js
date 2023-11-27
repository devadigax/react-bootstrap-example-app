import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

const DarkSearchBox = () => {
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowSearch(true);
            } else {
                setShowSearch(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check on mount
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`d-lg-none ${showSearch ? 'd-block' : 'd-none'}`} style={{ marginTop: '-75px' }}>
            <Container className='mb-4'>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto bg-secondary" placeholder="Add your item here..." />
                    <Button variant="outline-light">Submit</Button>
                </Stack>
            </Container>
        </div>
    );
};

export default DarkSearchBox;
