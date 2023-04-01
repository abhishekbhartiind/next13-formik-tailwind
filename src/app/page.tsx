"use client"

import React from "react"
import { Field } from "formik"
import { mixed, object } from "yup"
import { FormikStepper } from "./components/FormikStepper"
import { FormikStep } from "./components/FormikStep"

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time))

export default function Home() {
  return (
    <main>
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
              components={<input type="text" placeholder="First Name" />}
              label="First Name"
            />
          </div>
          <div>
            <Field
              fullwidth="true"
              components={<input type="text" placeholder="Last Name" />}
              name="lastName"
              label="Last Name"
            />
          </div>
          <div>
            <Field
              name="millionaire"
              type="checkbox"
              components={<input type="checkbox" />}
              label={{ label: "I am a millionaire" }}
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
              components={<input type="number" />}
              label="All the money I have"
            />
          </div>
        </FormikStep>
        <FormikStep label="More Info">
          <div style={{ paddingBottom: 2 }}>
            <Field
              fullwidth="true"
              name="description"
              components={<textarea />}
              label="Description"
            />
          </div>
        </FormikStep>
      </FormikStepper>
    </main>
  )
}
