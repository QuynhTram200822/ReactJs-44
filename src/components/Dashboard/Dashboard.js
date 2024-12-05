import React, { useRef, useState, useEffect } from "react";
import "./Dashboard.css";

import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from "primereact/radiobutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from 'primereact/calendar';

function Dashboard() {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    });
  };

  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");

  const [products, setProducts] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Michael Brown", email: "michael@example.com" },
  ]);

  const [date, setDate] = useState(null);
  return (
    <div className="App ">
      <div className="grid">
        <div className="col-6 col-offset-3  ">
          <div className=" flex justify-content-center mb-4  ">
            <h2>Prime React</h2>
          </div>
          {/* Demo Tabs */}
          <div className="mb-5 flex justify-content-center ">
            <TabView className="mb-5 w-full ">
              {/* Demo Button and Alert */}
              <TabPanel header="BUTTON">
                <Toast ref={toast} />
                <Button onClick={show} label="Show Alert" />
              </TabPanel>
              <TabPanel header="FORM">
                <div className="card flex flex-column gap-3">
                  <div className="card ">
                    <div
                      className="flex flex-column gap-2 mb-3 "
                      style={{ width: "215px" }}
                    >
                      <label htmlFor="username">Username</label>
                      <InputText
                        id="username"
                        aria-describedby="username-help"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      className="flex flex-column gap-2 mb-3 "
                      style={{ width: "300px" }}
                    >
                      <label htmlFor="password">Password</label>
                      <FloatLabel>
                        <Password
                          inputId="password"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          style={{ width: "100%" }}
                        />
                        <label htmlFor="password">Password</label>
                      </FloatLabel>
                    </div>
                    <div className="flex flex-column gap-2 mb-3">
                      <label htmlFor="username">Gender</label>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="gender1"
                          name="Male"
                          value="Male"
                          onChange={(e) => setGender(e.value)}
                          checked={gender === "Male"}
                        />
                        <label htmlFor="gender1" className="ml-2">
                          Male
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="gender2"
                          name="Female"
                          value="Female"
                          onChange={(e) => setGender(e.value)}
                          checked={gender === "Female"}
                        />
                        <label htmlFor="gender2" className="ml-2">
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-column gap-2 mb-3">
                      <label htmlFor="username">Birthday</label>
                      <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
                    </div>
                    <div className="card flex justify-content-center">
                      <Button label="Submit" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="TABLE">
                <div className="card">
                  <DataTable
                    value={products}
                    tableStyle={{ minWidth: "50rem" }}
                  >
                    <Column field="id" header="Id"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="email" header="Email"></Column>
                  </DataTable>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
