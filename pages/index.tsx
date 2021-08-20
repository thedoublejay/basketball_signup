import type { NextPage } from "next";
import Head from "next/head";
import { TextField, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [jerseyNumber, setNumber] = useState("");
  const [contactNumber, setContact] = useState("");
  const [players, setPlayers] = useState([
    {
      name: "Hanamichi Sakuragi",
      jerseyNumber: "10",
      contactNumber: "2131512",
    },
    { name: "Daniel Padilla", jerseyNumber: "30", contactNumber: "45123121" },
    { name: "Chris P. Bacon", jerseyNumber: "4", contactNumber: "48784812" },
  ]);

  return (
    <div className="container mx-auto main_container p-8">
      <Head>
        <title>Manila Mayhem Tryouts {new Date().getFullYear()}</title>
        <meta
          name="description"
          content={`Manila Mayhem Tryouts ${new Date().getFullYear()}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl">
          Manila Mayhem Tryouts {new Date().getFullYear()}
        </h1>
        <div className="mt-4">
          <h6>When: June 31 {new Date().getFullYear()}</h6>
          <h6>Where: Rucker Park</h6>
          <h6>
            If interested, contact <strong>Chon Seena (+63 91712345678)</strong>
          </h6>
        </div>

        <section className="mt-10 p-8 border">
          <h2 className="mb-6 font-bold">Sign-up Form</h2>
          <form noValidate autoComplete="off">
            <TextField
              id="Surname"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="ml-4">
              <TextField
                id="Jersey Number"
                label="Jersey Number"
                variant="outlined"
                value={jerseyNumber}
                onChange={(e) => setNumber(e.target.value)}
              />
            </span>
            <span className="ml-4 flex-1">
              <TextField
                id="Contact Number"
                label="Contact Number"
                variant="outlined"
                value={contactNumber}
                onChange={(e) => setContact(e.target.value)}
              />
            </span>
          </form>
          <div className="mt-8">
            <Button
              disabled={name === ""}
              variant="contained"
              color="primary"
              onClick={() => {
                setPlayers([...players, { name, jerseyNumber, contactNumber }]);
                setName("");
                setNumber("");
                setContact("");
              }}
            >
              Save
            </Button>
            <span
              className="ml-4"
              onClick={() => {
                setName("");
                setNumber("");
                setContact("");
              }}
            >
              <Button color="primary">Clear</Button>
            </span>
          </div>
        </section>

        <section className="mt-10 p-8 border">
          <h2 className="mb-6 font-bold">Players</h2>
          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Jersey Number</TableCell>
                  <TableCell align="right">Contact Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players.map((p) => (
                  <TableRow key={p.name}>
                    <TableCell component="th" scope="row">
                      {p.name}
                    </TableCell>
                    <TableCell align="right">{p.jerseyNumber}</TableCell>
                    <TableCell align="right">{p.contactNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </main>
    </div>
  );
};

export default Home;
