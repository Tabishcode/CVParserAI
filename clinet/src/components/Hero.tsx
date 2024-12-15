import React from 'react'
import { IoIosCloudUpload } from "react-icons/io";
const Hero = () => {
  return (
      <div className='font-satoshi'>
          <div className=" col-span-12 mx-auto grid min-h-[calc(100vh-150px)] max-w-screen-2xl grid-cols-8 gap-0 px-6 py-14 sm:gap-10 md:gap-16 md:px-10 md:py-28 lg:max-h-[1000px] lg:px-28 2xl:min-h-max">
      {/* Left Section */}
      <div className="col-span-12 lg:col-span-5 lg:my-auto">
                  <h1 className=" space-x-1.5 text-3xl font-medium text-primary md:text-4xl lg:text-start lg:text-5xl xl:text-[50px]">
                      <span>The Most Advanced and Accurate AI Resume Parser</span>
                      <span>🏆</span>
        </h1>
                  <p className="mx-auto pt-5 text-base md:text-[22px] lg:mx-0 lg:text-start xl:max-w-[80%] text-[#283d6f]">
                      Trusted by job boards, HR platforms, ATS, and recruiters to hire top talent faster with our AI resume analysis tool.
        </p>
        <div className="my-10 space-y-3 text-center lg:text-start">
          <span className="text-lg font-bold text-[#3F4555]">
            Steps to use our resume parsing software
          </span>
          <div className="mx-auto flex max-w-[750px] flex-col items-center justify-center lg:mx-0 lg:flex-row lg:space-x-6">
            {/* Step 1 */}
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAEAEA] p-1">
                <span>1</span>
              </div>
              <p className="text-sm text-[#3F4555]">
                Upload Resumes in Bulk or Individually
              </p>
            </div>
            <span className="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                                  className="  lucide lucide-move-right mr-2 h-8 w-8 rotate-90 text-primary lg:rotate-0"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </span>
            {/* Step 2 */}
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAEAEA] p-1">
                <span>2</span>
              </div>
              <p className="text-sm text-[#3F4555]">
                Automatically Extract Resume Data
              </p>
            </div>
            <span className="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                                  className="lucide-move-right mr-2 h-8 w-8 rotate-90 text-primary lg:rotate-0"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </span>
            {/* Step 3 */}
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAEAEA] p-1">
                <span>3</span>
              </div>
              <p className="text-sm text-[#3F4555]">
                Download or Sync with your ATS, HRM
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section */}
        <div className="custom_shadow col-span-12 mt-6 w-full pb-0 md:pb-0 lg:col-span-3 lg:my-auto lg:mt-0">
        <div className="flex w-full justify-end xl:-mt-10">
          <div
            role="presentation"
           
                          className="custom-shadow  w-full rounded-2xl border bg-white p-2.5 lg:max-w-[420px]"
          >
            <input
              accept="application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/pdf,.pdf"
              multiple
              type="file"
             
              aria-label="Upload resume"
              style={{
                border: "0px",
                clip: "rect(0px, 0px, 0px, 0px)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "0px -1px -1px 0px",
                overflow: "hidden",
                padding: "0px",
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
              }}
            />
              <div className="flex w-full justify-center rounded-xl border-2 border-dashed border-[#b8d8d8] hover:border-[#1e8484] px-4 py-2 transition-all duration-300 hover:border-primary border-primary/50">
              <div className="text-center">
                <span className="text-xl  font-bold text-[#404554] xl:text-3xl">
                  START PARSING NOW!
                </span>
                <div className="flex flex-col items-center space-y-2 py-12 md:mt-6">
                                      <div className='text-primary text-6xl'>
                                          < IoIosCloudUpload />
                                      </div>
                                      <p className="max-w-[220px] text-sm font-medium text-primary  md:text-lg">
                    Drag and drop a resume file or click to upload
                  </p>
                  <p className="mt-3 text-xs text-gray-500 md:!mt-1">
                    PDF, doc, docx or word file (maximum 5 files)
                  </p>
                                      <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex h-10 w-[128px] items-center space-x-2 rounded-md border bg-gradient-to-tr from-[#FF477E] to-primary px-6 py-2 md:!mt-6 md:h-12 md:w-40">
                    <span className="text-sm font-medium text-white md:text-base">
                      Upload
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero