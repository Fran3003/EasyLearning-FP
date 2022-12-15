import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllUsers } from "../../redux/actions";
// import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
// import "./addReview.module.css";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Select, Card } from '@chakra-ui/react';
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { StarIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

const PostReview = ({update, setUpdate}) => {
    
    const params = useParams();
    const [input, setInput] = useState({
        userId: 5, 
        courseId: parseInt(params.id), 
        score:0, 
        title:'', 
        comments:''
    });

    const [errors, setErrors] = useState({ });
    const dispatch = useDispatch();
    // const {user} = useAuth0();
    const allUser = useSelector((state) => state.allUsers);
    console.log(allUser)

    // const usuario = user && allUser.find(u => u.email === user.email)

    useEffect(() => {
        dispatch(getAllUsers())
        // if(usuario){
        //     setInput({
        //         userId: usuario.id,
        //         courseId: courseId
        //     })
        // }
    }, [dispatch, update]);


    function validate(input) {
        let errors = {};

        if (!input.title) {
            errors.title = "Please add a title.";
        }
        if (!input.score) {
            errors.score = "Please add a score";
        }
        if(!input.comments){ 
            errors.comments = "Please add your comments";
        }
        return errors
    }

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value

        }));
    }

   async function handleSubmit(e) {
        e.preventDefault();
        setInput({
            ...input, 
            score: parseInt(input.score)
        })
        await axios.post("/createReview", input);
        console.log(input)
        setUpdate(!update)
    }

    return ( 
        <Card 
        maxW='sm' 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
        >
          <FormControl  onSubmit={(e) => handleSubmit(e)} isRequired>
            <FormLabel>Rate: </FormLabel>
            <Select 
            placeholder='Select a rating'
            name='score'
            onChange={(e) => handleChange(e)}
            >
            <option onChange={e => handleChange(e)} value={1}>1</option>
            <option onChange={e => handleChange(e)} value={2}>2</option>
            <option onChange={e => handleChange(e)} value={3}>3</option>
            <option onChange={e => handleChange(e)} value={4}>4</option>
            <option onChange={e => handleChange(e)} value={5}>5</option>
            </Select>
            <FormErrorMessage> { errors.score && ( <p>{errors.score}</p> )}</FormErrorMessage>

             <FormLabel>Add a title: </FormLabel>
              <Input
              type = "text"
              value= {input.title}
              name = "title"
              onChange={(e) => handleChange(e)}
            />
            <FormErrorMessage> { errors.title && ( <p>{errors.title}</p> )}</FormErrorMessage>

            <FormLabel>Add your comments: </FormLabel>
            <Input
              type = "text"
              value= {input.comments}
              name = "comments"
              onChange={(e) => handleChange(e)}
            />
            <FormErrorMessage> { errors.comments && ( <p>{errors.comments}</p> )}</FormErrorMessage>

            <Button
            mt={4}
            colorScheme='teal'
            // isLoading={props.isSubmitting}
            // type='submit'
            onClick={(e) => handleSubmit(e)}
            > Submit </Button>
          </FormControl>
        </Card>

    )            
}

export default PostReview;