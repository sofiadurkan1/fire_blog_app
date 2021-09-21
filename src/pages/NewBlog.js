import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react";

const NewBlog = ({ info, setInfo, handleFormSubmit }) => {
  const handleInputChange = (e) => {
   
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };









  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 500 }}>
        <div className="ui piled segments">
          <div className="ui segment brand">
            <h2>NEW BLOG</h2>
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
