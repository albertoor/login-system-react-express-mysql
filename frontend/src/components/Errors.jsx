import {
  Popover, PopoverTrigger,
  Button, PopoverContent,
  PopoverArrow, PopoverCloseButton,
  PopoverHeader,
  PopoverBody, UnorderedList,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'
import React from 'react'

const Errors = (props) => {

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" color="tomato" mt={4}>Errors - Click Here!</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>You have some errors</PopoverHeader>
        <PopoverBody>
          <UnorderedList>
            {props.errors.map((err, i) => (
              <ListItem>
                <ListIcon as={WarningTwoIcon} color="tomato"></ListIcon>
                {err}
              </ListItem>
            ))}
          </UnorderedList>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default Errors
