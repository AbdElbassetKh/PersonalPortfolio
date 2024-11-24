"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  icon: LucideIcon;
}

export function Timeline({ items, icon: Icon }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle>{item.title}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{item.organization}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>{item.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}