import {
    ChakraProvider,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Box,
    Heading,
    Select,
    Divider,
    Textarea,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useToast
} from "@chakra-ui/react";
import axios from "axios";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import { baseUrl } from "../urls";
import Loading from "../Components/Loading";

function Giveaway() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [PrizeDescription, setPrizeDescription] = useState('');
    const [TicketPrice, setTicketPrice] = useState(50);
    const [TotalTickets, setTotalTickets] = useState(50);
    const [Delivery, setDelivery] = useState('host');
    const [prizeCategory, setPrizeCategory] = useState('');
    const [prizeLocation, setPrizeLocation] = useState({});
    const [EndDate, setEndDate] = useState();
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const prizeCategories = [
        '---------',
        'experience',
        'travelling',
        'luxury',
        'health',
        'beauty',
        'electronics',
        'airbnb',
        'tickets',
        'vehicles',
        'realestate',
        'motorcycles',
        'bicycles',
        'accessories',
        'tools',
        'shoes',
        'clothing',
        'other'

    ]

    const tasks = [
        '----------',
        'findeasteregg',
        'giveemail',
        'followpage',
        'subscribetoyoutubetchannel'      
    ]

    const toast = useToast();

    const showToast = (status, message) => {

        toast({
            title: status === 'error' ? 'Error' : 'Success',
            description: message,
            status: status,
            duration: 9000,
            isClosable: true,
        });
    }

    const getLocation = () => {
        function success(position) {
            //console.log(position);
            setPrizeLocation(position.coords.latitude, position.coords.longitude);
        }

        function error() {
            alert('Sorry, no position available.');
        }

        if ('geolocation' in navigator) {
            /* geolocation is available */

            const options = {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 10000
            };

            navigator.geolocation.getCurrentPosition(success, error, options);

        } else {
            /* geolocation IS NOT available */
            return;
        }

    }

    const onChange = ({ fileList: newFileList }) => {

        const filteredFileList = newFileList.filter(file => file.size <= MAX_FILE_SIZE);

        setFileList(filteredFileList);
    }

    const onPreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
    }

    const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB

    const props = {

        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {

            console.log("Before upload");

            const acceptedSize = file.size < MAX_FILE_SIZE;

            if (!acceptedSize) {
                showToast('error', `${file.name} is larger than 3 MB`);
            }

            return false;
        },
        fileList,
        listType: "picture-card",
        onChange,
        onPreview,
        accept: "image/png, image/jpeg"
    };

    const pad = (number) => {
        return number < 10 ? "0" + number : number;
    };

    const create = (event) => {

        event.preventDefault();

        // Check if all required fields are filled
        // Check if title is filled
        // Check if title is filled
        if (!title) {
            showToast('error', 'Title is required');
            return;
        }

        // Check if description is filled
        if (!description) {
            showToast('error', 'Description is required');
            return;
        }

        // Check if EndDate is filled
        if (!EndDate) {
            showToast('error', 'End Date is required');
            return;
        }

        // Check if PrizeDescription is filled
        if (!PrizeDescription) {
            showToast('error', 'Prize Description is required');
            return;
        }

        // Check if TicketPrice is filled
        if (!TicketPrice) {
            showToast('error', 'Ticket Price is required');
            return;
        }

        // Check if TotalTickets is filled
        if (!TotalTickets) {
            showToast('error', 'Total Tickets is required');
            return;
        }

        // Check if prizeCategory is filled
        if (!prizeCategory) {
            showToast('error', 'Prize Category is required');
            return;
        }

        // Check if at least one image is selected
        if (fileList.length === 0) {
            showToast('error', 'Please select at least one image');
            return;
        }

        // Validate that EndDate is not a past date
        const currentDate = new Date();
        const selectedDate = new Date(EndDate);
        if (selectedDate < currentDate) {
            showToast('error', 'Please select a future date for the End Date');
            return;
        }

        const formData = new FormData();

        formData.append('title', title)
        formData.append('description', description)
        formData.append('EndDate', EndDate)
        formData.append('PrizeDescription', PrizeDescription)
        formData.append('TicketPrice', TicketPrice)
        formData.append('TotalTickets', TotalTickets)
        formData.append('Delivery', Delivery)
        formData.append('prizeCategory', prizeCategory)

        fileList.forEach((file) => {
            if (file.size > MAX_FILE_SIZE) {
                showToast('error', 'Some images are larger than 3 Mb');
                return;
            }

            formData.append('images', file.originFileObj);

        });

        setLoading(true)

        axios.post(`${baseUrl}/games`, formData, { withCredentials: true })
            .then((response) => {

                setLoading(false);

                navigate('/app');

                showToast('success', `The game is live`)
            })
            .catch((error) => {

                setLoading(false);

                showToast("error", "There was an error, please try again");

            })
    }

    return (

        <ChakraProvider theme={theme}>

            <Heading>Create a Giveaway</Heading>

            <Divider marginY='4' />

            {loading ? <Loading /> :
                <Box height='1700px'  >
                    <form
                        method="post"
                        onSubmit={create}>
                        {/* Title input */}
                        <FormControl isRequired>
                            <FormLabel>Title of the Giveaway</FormLabel>
                            <Input
                                marginY='4'
                                placeholder="e.g. Win my Merchandise"
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}>
                            </Input>

                        </FormControl>

                        <Divider marginY='4' />

                        {/* End Title input */}

                        {/* Start Description */}

                        <FormControl isRequired>

                            <FormLabel>A not so long description of the Giveaway</FormLabel>
                            <Textarea
                                marginY='4'
                                placeholder="e.g Win this Merch before the end of March,... etc"
                                type="text"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}>

                            </Textarea>

                        </FormControl>

                        {/* End Description */}

                        <Divider marginY='4' />

                        {/* Start PrizeDescription input */}
                        <FormControl isRequired>

                            <FormLabel >A description of the prize</FormLabel>
                            <Textarea
                                marginY='4'
                                placeholder="Here you describe the prize, this will be used incase of a dispute"
                                type="text"
                                value={PrizeDescription}
                                onChange={(event) => setPrizeDescription(event.target.value)}>
                            </Textarea>

                        </FormControl>

                        {/* End PrizeDescription input */}

                        <Divider marginY='4' />

                        <FormControl isRequired>

                            <FormLabel>Select the Category of your Prize</FormLabel>
                            <Select
                                marginY='4'
                                value={prizeCategory}
                                onChange={(event) => setPrizeCategory(event.target.value)}>

                                {
                                    prizeCategories.map(category => <option key={category} value={category}>{category}</option>)
                                }

                            </Select>
                        </FormControl>

                        <Divider marginY='4' />

                        <FormLabel marginY='4'> Upload the images of your prize (maximum 5 images)</FormLabel>
                        {/* TODO : Handle file uploads for multiple max 8 and Single */}

                        <Upload
                            {...props}
                        >
                            {fileList.length < 5 && <Text color='teal'>+ Upload</Text>}
                        </Upload>


                        {/* Tasks such as Install an app, subscribe to channel, 
                        
                                follow page, share email, subscribe to newslletter or
                                find an easter egg


                                TODO: Implemnt a dynamic form where the user creates a 
                                task which the participant will use to gain points
                                for the giveaway.
                        */}
                        

                        <FormControl isRequired>

                            <FormLabel>Delivery</FormLabel>
                            <Select
                                marginY='4'
                                value={Delivery}
                                onChange={(event) => setDelivery(event.target.value)}>
                                <option value='host'>Host Covers Cost</option>
                                <option value='winner'>Winner Covers Cost</option>
                                <option value='collect'>Receive at Business Premise </option>
                            </Select>
                        </FormControl>

                        <Divider marginY='4' />

                        {/* Start EndDate input */}
                        <FormControl isRequired>

                            <FormLabel> Pick an End Date</FormLabel>
                            <Input
                                marginY='4'
                                type="datetime-local"
                                onChange={(event) => {
                                    const timestamp = event.target.valueAsNumber;
                                    setEndDate(timestamp);
                                }}>
                            </Input>

                        </FormControl>

                        {/* End EndDate input */}

                        <Divider marginY='4' />

                        <Button
                            marginBottom='10'
                            width='100%'
                            colorScheme='teal'
                            mt='4'
                            type="submit">Launch Giveaway</Button>
                    </form>
                </Box>}
        </ChakraProvider>

    );
}

export default Giveaway;