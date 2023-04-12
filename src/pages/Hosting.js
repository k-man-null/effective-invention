import {
    ChakraProvider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
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
    NumberDecrementStepper
} from "@chakra-ui/react";
import axios from "axios";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import { baseUrl } from "../urls";

function Hosting() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [PrizeDescription, setPrizeDescription] = useState('');
    const [TicketPrice, setTicketPrice] = useState(50);
    const [TotalTickets, setTotalTickets] = useState(200);
    const [Delivery, setDelivery] = useState('host');
    const [prizeCategory, setPrizeCategory] = useState('');
    const [prizeLocation, setPrizeLocation] = useState({});
    const [EndDate, setEndDate] = useState();
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate();

    const isTitleError = title === '';
    const isDescriptionError = description === '';
    const isPrizeDescriptionError = validatePrizeDescription(PrizeDescription);
    const isTicketPriceError = TicketPrice === '';
    //const isEndDateError = validateEndDate(EndDate);

    const prizeCategories = [
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

    const getLocation = () => {
        function success(position) {
            console.log(position);
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
        setFileList(newFileList);
    }

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    }

    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);

            return false;
        },
        fileList,
        listType: "picture-card",
        onChange,
        onPreview
    };

    function validateEndDate(EndDate) {
        //TODO validate end date
        if (EndDate < Date.now()) {
            return false
        }
        if (EndDate.length < 8) {
            return false
        }

        return true
    }

    function validatePrizeDescription(PrizeDescription) {

        if (PrizeDescription === '' || PrizeDescription == undefined) {
            return false
        }

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(PrizeDescription)) {
            return true
        }

    }

    function validatePhone(phone) {
        //TODO
    }

    const create = (event) => {

        event.preventDefault();

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

            formData.append('images', file.originFileObj);
        });


        // if (
        //     isTitleError ||
        //     isDescriptionError ||
        //     isPrizeDescriptionError ||
        //     isTicketPriceError || 0

        // ) {
        //     return
        // }

        //TODO : Handle validation proper!!! like a boss 

        axios.post(`${baseUrl}/games`, formData, { withCredentials: true })
            .then((response) => {
                
                alert(`The game ${response.data.done.title} is live`);
                //TODO success to be displayed with toast
            })
            .catch((error) => {

                //TODO errors to be displayed via toast

                alert(error.response.data);
            })


    }

    return (

        <ChakraProvider theme={theme}>

            <Heading>Host a Competition</Heading>

            <Divider marginY='4' />
            <Box height='1700px'  >
                <form
                    method="post"
                    onSubmit={create}>
                    {/* Title input */}
                    <FormControl isInvalid={isTitleError}>
                        <FormLabel>Title of the Competition</FormLabel>
                        <Input
                            marginY='4'
                            placeholder="e.g. Win my Merchandise"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}>
                        </Input>
                        {!isTitleError ? (
                            <FormHelperText>
                                Enter the title
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Title is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    <Divider marginY='4' />

                    {/* End Title input */}

                    {/* Start Description */}

                    <FormControl isInvalid={isDescriptionError}>

                        <FormLabel>A not so long description of the competition</FormLabel>
                        <Textarea
                            marginY='4'
                            placeholder="e.g Win this Merch before the end of March,... etc"
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}>

                        </Textarea>
                        {!isDescriptionError ? (
                            <FormHelperText>
                                Enter your long Description.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Description is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    {/* End Description */}

                    <Divider marginY='4' />

                    {/* Start PrizeDescription input */}
                    <FormControl isInvalid={isPrizeDescriptionError}>

                        <FormLabel >A description of the prize</FormLabel>
                        <Textarea
                            marginY='4'
                            placeholder="Here you describe the prize, this will be used incase of a dispute"
                            type="text"
                            value={PrizeDescription}
                            onChange={(event) => setPrizeDescription(event.target.value)}>
                        </Textarea>
                        {!isPrizeDescriptionError ? (
                            <FormHelperText>
                                Describe the prize in detail.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>PrizeDescription is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    {/* End PrizeDescription input */}

                    <Divider marginY='4' />

                    <FormLabel>Select the Category of your Prize</FormLabel>
                    <Select
                        marginY='4'
                        value={prizeCategory}
                        onChange={(event) => setPrizeCategory(event.target.value)}>

                        {
                            prizeCategories.map(category => <option key={category} value={category}>{category}</option>)
                        }

                    </Select>

                    <Divider marginY='4' />

                    <FormLabel marginY='4'> Upload the images of your prize (maximum 5 images)</FormLabel>
                    {/* TODO : Handle file uploads for multiple max 8 and Single */}
                    <ImgCrop rotationSlider>
                        <Upload
                            {...props}
                        >
                            {fileList.length < 5 && <Text color='teal'>+ Upload</Text>}
                        </Upload>
                    </ImgCrop>

                    {/* Start TicketPrice input */}

                    <Divider marginY='4' />

                    <FormLabel>Price per Ticket</FormLabel>
                    <Select
                        marginY='4'
                        value={TicketPrice}
                        onChange={(event) => setTicketPrice(Number(event.target.value))}>
                        <option value='50'>50</option>
                        <option value='100'>100</option>
                        <option value='200'>200</option>
                        <option value='250'>250</option>
                        <option value='500'>500</option>
                        <option value='1000'>1000</option>
                        <option value='2000'>2000</option>
                        <option value='3000'>3000</option>
                        <option value='4000'>4000</option>
                        <option value='5000'>5000</option>
                        <option value='10000'>10000</option>

                    </Select>


                    {/* End TicketPrice input */}

                    <Divider marginY='4' />

                    {/* Start Number of Tickets input */}

                    <FormLabel>Total tickets to be sold (max 1 Million, minimum 200)</FormLabel>

                    <NumberInput
                        marginY='4'
                        value={TotalTickets}
                        defaultValue={200}
                        min={200} max={1000000}
                        onChange={(value) => setTotalTickets(Number(value))}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                    {/* End Number of Tickets input */}

                    <Divider marginY='4' />

                    <FormLabel>Delivery</FormLabel>
                    <Select
                        marginY='4'
                        value={Delivery}
                        onChange={(event) => setDelivery(event.target.value)}>
                        <option value='host'>Host Covers Cost</option>
                        <option value='winner'>Winner Covers Cost</option>
                        <option value='collect'>Receive at Business Premise </option>
                    </Select>

                    {/* End TicketPrice input */}

                    <Divider marginY='4' />

                    <FormLabel>Location, (Optional)</FormLabel>
                    <Text>
                        This option is helpful if the location of your prize
                        will be useful to locals, e.g when the prize is an event ticket
                        or when the prize is a piece of real estate.
                        This location will be shown to entrants,

                    </Text>
                    <Text color='teal.500' fontWeight='extrabold'>
                        make sure you are
                        at the location of the prize.
                    </Text>
                    <Button
                        marginY='4'
                        colorScheme='red'
                        onClick={getLocation}>
                        Get the location of the Competition
                    </Button>

                    {/* End TicketPrice input */}

                    <Divider marginY='4' />

                    {/* Start EndDate input */}
                    <FormControl >

                        <FormLabel> Pick an End Date</FormLabel>
                        <Input
                            marginY='4'
                            type="datetime-local"
                            onChange={(event) => setEndDate(event.target.value)}>
                        </Input>

                    </FormControl>

                    {/* End EndDate input */}

                    <Divider marginY='4' />

                    <Button
                        marginBottom='10'
                        width='100%'
                        colorScheme='teal'
                        mt='4'
                        type="submit">Launch Competition</Button>
                </form>
            </Box>
        </ChakraProvider>

    );
}

export default Hosting;