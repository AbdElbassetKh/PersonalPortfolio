"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss your next project or collaboration opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>abdelbassetkhettabi@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="w-5 h-5 text-primary" />
                  <span><a href="github.com/AbdElbassetKh"></a>Github Profile</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span><a href="linkedin.com/in/AbdElbassetKh">Linkedin Profile</a></span>
                </div>
                <div className="flex items-center space-x-4">
                  <Twitter className="w-5 h-5 text-primary" />
                  <span><a href="x.com/AbdElbassetKh">X Profile</a></span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Your message" className="min-h-[150px]" />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}