import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Typography from '@mui/material/Typography';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.contractingParty}
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          {row.pin === 'Y' && (
            <IconButton aria-label="expand row" size="small">
              {<PushPinOutlinedIcon />}
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
          }}
          colSpan={3}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.benificialOwner.map((historyRow) => (
                    <TableRow key={historyRow.clientName}>
                      <TableCell align="right">
                        <IconButton aria-label="expand row" size="small">
                          {<RemoveOutlinedIcon />}
                        </IconButton>
                      </TableCell>
                      <TableCell align="left">
                        {historyRow.clientName}
                      </TableCell>
                      <TableCell>
                        {historyRow.pin === 'Y' && (
                          <IconButton aria-label="expand row" size="small">
                            {<PushPinOutlinedIcon />}
                          </IconButton>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                  {row.powerOfAttorney.map((powerOfAttorney) => (
                    <TableRow key={powerOfAttorney.powerOfAttorney}>
                      <TableCell align="right">
                        <IconButton aria-label="expand row" size="small">
                          {<RemoveOutlinedIcon />}
                        </IconButton>
                      </TableCell>
                      <TableCell align="left">
                        {powerOfAttorney.powerOfAttorney}
                      </TableCell>
                      <TableCell>
                        {powerOfAttorney.pin === 'Y' && (
                          <IconButton aria-label="expand row" size="small">
                            {<PushPinOutlinedIcon />}
                          </IconButton>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  {
    contractingParty: 'Cherie Blair',
    pin: 'Y',
    benificialOwner: [
      {
        clientName: 'John Blair',
        pin: 'Y',
      },
    ],
    powerOfAttorney: [
      {
        powerOfAttorney: 'Thomas Blair',
      },
    ],
  },
  {
    contractingParty: 'Tony Blair',
    pin: 'Y',
    benificialOwner: [
      {
        clientName: 'James Blair',
      },
    ],
    powerOfAttorney: [
      {
        powerOfAttorney: 'Jessica James',
      },
    ],
  },
  {
    contractingParty: 'James Cameron',
    benificialOwner: [],
    powerOfAttorney: [],
  },
];

export default function CollapsibleTable() {
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Parties
      </Typography>{' '}
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Parties Name</TableCell>
              <TableCell align="left">Pin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
