import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Divider, Segment, Icon, List, Dimmer, Loader, Image, Pagination } from 'semantic-ui-react';


function App() {


  return (
    <div className="App">
      <Container>
        <Container textAlign="center">
          <Icon
            float="center"
            color="blue"
            name="search"
            size="massive"
          ></Icon>
        </Container>

        <Header
          color="blue"
          textAlign="center"
          as="h1"
          content="Ledn Users Search"
          subheader="Token holder's accounts"
        />

        <Container textAlign="left">
          <List>
            <List.Item>
              <List.Icon name='users' />
              <List.Content>Axel Galicia</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='marker' />
              <List.Content>Toronto, ON. Canada</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>
                <a href='mailto:jack@semantic-ui.com'>axelgalicia@gmail.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='https://axel.today.com'>axel.today</a>
              </List.Content>
            </List.Item>
          </List>
        </Container>

        <Divider />

        <Segment>
          <Header as='h3'>User's Data</Header>
          <Divider section />


        </Segment>

        <Segment color="green">
          <Header as='h3' color="green">Searching fields</Header>
          <Divider section />

          <Header as='h3'>Filtering</Header>
          <Divider section />

          <Header as='h3'>Sorting</Header>
          <Divider section />
        </Segment>


        <Segment color="blue">
          <Header as='h3' color='blue'>Results</Header>
          <Divider section />

          <Segment>
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>

            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>

          
          <Container textAlign="center">
            <Pagination defaultActivePage={5} totalPages={5} />
          </Container>

        </Segment>
      </Container>


    </div>
  );
}




export default App;
