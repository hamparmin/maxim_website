import React, { useState } from 'react'
import { Grommet, Grid, Sidebar, Card, CardHeader, Carousel, Heading, CardBody, Paragraph, CardFooter, Button, Accordion, AccordionPanel, Box, Clock, Main, Image } from 'grommet'
import { Phone, LinkedinOption, Mail, Favorite, ShareOption } from 'grommet-icons'
import Draggable from 'react-draggable'; // The default
import { useSpring, animated as a } from 'react-spring'


const theme = {
  "global": {
    "colors": {
      "background": {
        "light": "#ffffff",
        "dark": "#000000"
      }
    },
    "font": {
      "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  "button": {
    "extend": [
      null
    ]
  }
}
export default () => {
    
  return (
    <Grommet full theme={theme}>
      <Grid columns={["medium","auto"]} rows={["auto",""]} fill="vertical" areas={[{"name":"name-card","start":[0,0],"end":[0,1]},{"name":"canvas","start":[1,0],"end":[1,1]}]}>
        <Sidebar align="stretch" direction="column" gap="large" background={{"color":"background-back","dark":false}} border={{"color":"background-back"}} fill="vertical" gridArea="name-card" justify="start">
          <Card background={{"color":"accent-1","opacity":"strong","dark":false,"position":"top"}} align="center" justify="end" flex={false}>
            <CardHeader align="center" direction="row" justify="center" flex="grow">
              <Heading level="1" size="small" textAlign="center" margin="xsmall" color="dark-1">
                Maxim Goldau
              </Heading>
            </CardHeader>
            <CardBody pad="small" justify="center" align="center">
              <Paragraph size="medium" textAlign="start" color="dark-1" margin="none">
                A creative genius who will make better than anyone else would, 100% satisfaction.
              </Paragraph>
            </CardBody>
            <CardFooter align="center" direction="row" flex={false} justify="center" gap="medium" pad="small">
              <Button label="Contact" icon={<Phone />} type="submit" reverse secondary={false} primary />
              <Button secondary={false} icon={<LinkedinOption />} plain />
              <Button icon={<Mail />} />
            </CardFooter>
          </Card>
          <Accordion animate multiple={false}>
            <AccordionPanel label="education">
              <Paragraph>
                Suspendisse tincidunt nulla id erat gravida, et pretium nunc suscipit. Nunc ut tortor ut justo bibendum fermentum. Mauris vel gravida enim, vitae efficitur ante. Pellentesque ut suscipit metus. Suspendisse non blandit risus. In interdum purus at nunc convallis vehicula. 
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel label="architecture">
              <Paragraph>
                Suspendisse tincidunt nulla id erat gravida, et pretium nunc suscipit. Nunc ut tortor ut justo bibendum fermentum. Mauris vel gravida enim, vitae efficitur ante. Pellentesque ut suscipit metus. Suspendisse non blandit risus. In interdum purus at nunc convallis vehicula. 
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel label="other">
              <Paragraph>
                Suspendisse tincidunt nulla id erat gravida, et pretium nunc suscipit. Nunc ut tortor ut justo bibendum fermentum. Mauris vel gravida enim, vitae efficitur ante. Pellentesque ut suscipit metus. Suspendisse non blandit risus. In interdum purus at nunc convallis vehicula. 
              </Paragraph>
            </AccordionPanel>
          </Accordion>
          <Box align="center" justify="end" pad={{"top":"xlarge"}} wrap={false} alignSelf="start" basis="medium">
            <Clock type="digital" hourLimit="24" precision="seconds" run="forward" size="large" />
          </Box>
        </Sidebar>
        <Main gridArea="canvas" overflow="hidden">
          <Draggable>
          <Card background={{"color":"light-1"}} width="medium">
            <CardHeader align="center" direction="row" pad="small">
              <Heading level="3" textAlign="start">
                Thesis Project
              </Heading>
            </CardHeader>
            <CardBody pad="small" flex={true} justify="stretch">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Shack_in_Pigeon_Forge%2C_TN_by_Zachary_Davies.jpg" />
            </CardBody>
            <CardFooter align="center" direction="row" flex={true} justify="between" gap="medium" pad="small" background={{"color":"light-3"}}>
              <Favorite color="status-critical" />
              <ShareOption  />
            </CardFooter>
          </Card></Draggable>
          <Draggable>
            <Box height="small" width="medium" overflow="hidden"  direction="row" border={{ color: 'brand', size: 'medium' }} background={{"color":"light-1"}} pad="medium">
              <Carousel fill>
                  <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                  <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                  <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
              </Carousel>
            </Box>
          </Draggable>

        </Main>
      </Grid>
    </Grommet>
  )
}
