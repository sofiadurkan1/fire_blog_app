import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { useState, useContext } from "react";
import { addInfo, updateInfo } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router";



const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const selectedTitle  = localStorage.getItem('title')
  const selectedId  = localStorage.getItem('id')
  const selectedImage  = localStorage.getItem('image')
  const selectedContent  = localStorage.getItem('content')

  const initialValues = {
    title: selectedTitle ? selectedTitle : "",
    image: selectedImage ? selectedImage : "",
    content: selectedContent ? selectedContent : "",
    id : selectedId ? selectedId : "",
    user: currentUser?.email,
  };
  const [info, setInfo] = useState(initialValues);
  
let history = useHistory()
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      updateInfo(info);
    } else {
      addInfo(info);
    }
    history.push("/")
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 500 }}>
        <div className="ui piled segments">
          <div className="ui segment brand">
            <h2>{info.id ? "UPDATE BLOG" : "NEW BLOG"}</h2>
          </div>
        </div>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="title"
              placeholder="Title*"
              value={info.title}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="image"
              placeholder="Image URL*"
              value={info.image}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="content"
              placeholder="Content*"
              value={info.content}
              onChange={handleInputChange}
              required
            />
            <Button color="teal" fluid size="large">
              {info.id ? "Update" : "SUBMIT"}
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default NewBlog;
