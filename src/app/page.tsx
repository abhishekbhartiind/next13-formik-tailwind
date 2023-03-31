"use client"

import React from "react"
import { Field } from "formik"
import { Inter } from "next/font/google"
import { mixed, object } from "yup"
import { FormikStepper } from "./components/FormikStepper"
import { FormikStep } from "./components/FormikStep"

const inter = Inter({ subsets: ["latin"] })
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
            <Field fullwidth="true" name="firstName" label="First Name" />
          </div>
          <div>
            <Field fullwidth="true" name="lastName" label="Last Name" />
          </div>
          <div>
            <Field
              name="millionaire"
              type="checkbox"
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
              fullWidth
              name="money"
              type="number"
              label="All the money I have"
            />
          </div>
        </FormikStep>
        <FormikStep label="More Info">
          <div style={{ paddingBottom: 2 }}>
            <Field fullWidth name="description" label="Description" />
          </div>
        </FormikStep>
      </FormikStepper>
      <div>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
