import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import useFiltersStore from '../stores/useFiltersStore';

type TRequestItem = {
  id: string;
  title: string;
  category: string;
  location: string;
}

const DATA: TRequestItem[] = [
  {
    id: "TCKT001",
    title: "WiFi Connection Issue",
    category: "Internet",
    location: "Lobby",
  },
  {
    id: "TCKT002",
    title: "Room Temperature Control",
    category: "HVAC",
    location: "Guest Room 101",
  },
  {
    id: "TCKT003",
    title: "TV Not Working",
    category: "Entertainment",
    location: "Guest Room 205",
  },
  {
    id: "TCKT004",
    title: "Bathroom Leak",
    category: "Plumbing",
    location: "Guest Room 309",
  },
  {
    id: "TCKT005",
    title: "Noise Complaint",
    category: "General",
    location: "Guest Room 415",
  },
  {
    id: "TCKT006",
    title: "Housekeeping Request",
    category: "Housekeeping",
    location: "Guest Room 512",
  },
  {
    id: "TCKT007",
    title: "Broken Window",
    category: "Maintenance",
    location: "Guest Room 614",
  },
  {
    id: "TCKT008",
    title: "Restaurant Reservation",
    category: "Dining",
    location: "Restaurant",
  },
  {
    id: "TCKT009",
    title: "Lost and Found",
    category: "Lost Property",
    location: "Front Desk",
  },
  {
    id: "TCKT010",
    title: "Gym Equipment Repair",
    category: "Fitness",
    location: "Gym",
  },
  // Add more dummy data rows as needed
];


const ListOfRequests: React.FC = () => {
  const searchValue = useFiltersStore(state => state.searchValue);

  const data: TRequestItem[] = DATA.filter(req => {
    return req.title.toLowerCase().includes(searchValue.toLowerCase());
  })

  return (
    <div>
      <h1>List of Requests</h1>

      <TableContainer>
        <Table>
          <Thead>
            <Tr background="black4" height="40px">
              <Th width="100px">ID</Th>
              <Th width="300px">Title</Th>
              <Th width="150px">Category</Th>
              <Th width="150px">Location</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map(req => (
              <Tr key={ req.id } height="40px">
                <Td width="100px">{ req.id }</Td>
                <Td width="300px">{ req.title }</Td>
                <Td width="150px">{ req.category }</Td>
                <Td width="150px">{ req.location }</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ListOfRequests