import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Questions = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Function to handle sending a message
  const sendMessage = (message, sender = 'user') => {
    setMessages([...messages, { text: message, sender }]);
    setUserInput(""); // Clear input after sending
  };

  // Effect to automatically send a message when conversation length > 0
  // useEffect(() => {
  //   if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
  //     const autoReply = "This is an automatic response. How can I assist you further?";
  //     setTimeout(() => sendMessage(autoReply, 'bot'), 1000); // Simulate a delay for bot response
  //   }
  // }, [messages]);
  return (
    <>
      <div className="container mx-auto p-8 md:p-16 lg:p-24">
        <h1 className="text-Step text-center text-white lg:text-3xl md:text-3xl sm:text-3xl  font-medium mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-[#6C8593] text-center  lg:text-sm md:text-sm sm:text-sm  font-medium mb-8">Here are some answers to common questions we get from students about <br />
          Knowledge Society Learning. If your question is not answered below, contact us <br />
          to assist.</p>
        <div className="flex w-full flex-col md:flex-row justify-center items-center">
          <div className="flex flex-wrap md:w-[80%] lg:w-[80%]">
            <Accordion className="w-full p-4  text-sm lg:text-xl md:text-xl sm:text-xl">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "rgb(15, 116, 129)", color: "#fff" }}
                  >
                    Who will benefit from your services?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-white text-sm">
                    Whether you're just starting out in your career, looking to move up the ladder, or considering a change, our services are for anyone who wants to reach their career goals.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "rgb(15, 116, 129)", color: "#fff" }}
                  >
                    How can your services help me with my career goals?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-white text-sm">
                    Our experienced coaches give you personalized advice and support to help you figure out what you want and how to get there. Whether it's improving your resume or navigating a career change, we're here to help.

                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "rgb(15, 116, 129)", color: "#fff" }}
                  >
                    How do I get started?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-white text-sm">
                    It's easy! Check out our website, pick the services you need, and schedule a chat with one of our expert coaches. We'll talk about your goals and how we can help.

                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "rgb(15, 116, 129)", color: "#fff" }}
                  >
                    Are your services for specific industries?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-white text-sm">
                    Nope! Whether you're in tech, healthcare, finance, or anything else, our coaches have the know-how to help you succeed.

                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "rgb(15, 116, 129)", color: "#fff" }}
                  >
                    What makes your services different?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-white text-sm">
                    We focus on you and what you need. Our coaches are experts who care about your success and will work with you to make sure you reach your goals. You can trust us to help you every step of the way!
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Questions;
