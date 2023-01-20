import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
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
          {row.name}
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
                  {row.namedetails.map((historyRow) => (
                    <TableRow key={historyRow.clientName}>
                      <TableCell>
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
    name: 'Amit',
    pin: 'Y',
    namedetails: [
      {
        clientName: 'HEllo',
      },
    ],
  },
  {
    name: 'Singh',
    pin: 'N',
    namedetails: [
      {
        clientName: 'World',
      },
    ],
  },
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Parties</TableCell>
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
  );
}
