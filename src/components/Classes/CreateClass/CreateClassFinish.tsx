import { Button, Center, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { THEME } from '../../../CONSTANTS';


export function CreateClassFinish() {

    const [bg, setBg] = useState(
        "https://i.pinimg.com/originals/07/03/48/0703483f8e3100d87497817030fb903f.gif",
    );

    useEffect(() => {
        setTimeout(() => {
            setBg('')
        }, 4200);
    },[])

  return (
      <div
          style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
          }}
      >
          <Center py="40">
              <VStack>
                  <Text fontWeight={"bold"} fontSize={"5xl"}>
                      Congratulation
                  </Text>
                  <Text
                      fontWeight={"light"}
                      pt="5"
                      fontSize={"2xl"}
                      className="text-light-1"
                      textAlign={'center'}
                  >
                      Your class was successfully created and now it's time to
                      sail the ship
                  </Text>
                  <VStack pt="20">
                      <Button
                          className="button -purple-1 text-white"
                          size={"lg"}
                      >
                          Publish Class
                      </Button>
                      <br />
                      <Button
                          variant={"link"}
                          color={THEME}
                          className="button text-purple-1"
                          size={"lg"}
                      >
                          Maybe later
                      </Button>
                  </VStack>
              </VStack>
          </Center>
      </div>
  );
}