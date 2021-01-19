import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Search(props) {
        return(
            <div className="form-group">
                <Form >
                  <Label>City:</Label>
                  <Input type="text" id="city"value="chicago" />
                  <Button>Submit Query</Button>
                </Form>
            </div>
        );
}

export default Search;