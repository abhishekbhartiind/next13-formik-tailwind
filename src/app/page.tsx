"use client"

import React from "react"
import { Field } from "formik"
import { mixed, object } from "yup"
import { FormikStepper } from "./components/FormikStepper"
import { FormikStep } from "./components/FormikStep"

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time))

export default function Home() {
  return (
    <main className="container p-4">
      <FormikStepper
        initialValues={{
          firstName: "",
          lastName: "",
          millionaire: false,
          money: 0,
          description: "",
        }}
        onSubmit={async (values) => {
          await sleep(3000)
          console.log("values", values)
        }}
      >
        <FormikStep label="Personal Data">
          <div style={{ paddingBottom: 2 }}>
            <Field
              fullwidth="true"
              name="firstName"
              label="First Name"
              placeholder="First Name"
            />
          </div>
          <div>
            <Field
              fullwidth="true"
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <Field
              name="millionaire"
              type="checkbox"
              label={{ label: "I am a millionaire" }}
              placeholder="I am a millionare"
            />
          </div>
        </FormikStep>
        <FormikStep
          label="Bank Accounts"
          validationSchema={object({
            money: mixed().required(),
          })}
        >
          <div style={{ paddingBottom: 2 }}>
            <Field
              fullwidth="true"
              name="money"
              type="number"
              label="All the money I have"
              placeholder="Money"
            />
          </div>
        </FormikStep>
        <FormikStep label="More Info">
          <div style={{ paddingBottom: 2 }}>
            <Field
              fullwidth="true"
              name="description"
              label="Description"
              placeholder="Description"
            />
          </div>
        </FormikStep>
      </FormikStepper>
    </main>
  )
}
