import React, { useState, useEffect } from "react";
import { Card, Input, Button, Form, Spin } from "antd";
import { CloseOutlined, MailOutlined } from "@ant-design/icons";

interface FloatingSubscribeCardProps {
  isVisible: boolean;
  onClose: () => void;
  setNewsletterSubscriptionStatus: React.Dispatch<
    React.SetStateAction<{ subscribed: boolean; rejected: string }>
  >;
}

const FloatingSubscribeCard: React.FC<FloatingSubscribeCardProps> = ({
  isVisible,
  onClose,
  setNewsletterSubscriptionStatus,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values: { email: string }) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Subscribed with email:", values.email);
      setLoading(false);
      setSubmitted(true);
    }, 1500);
    setNewsletterSubscriptionStatus({ subscribed: true, rejected: "" });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000); // Let's hide the card 1 seconds after showing the 'thank you' message
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      data-testid="floating-subscribe-card"
      className="fixed bottom-4 right-4 sm:w-2/5 md:w-80 transition-opacity duration-300"
    >
      <Card
        className="bg-white text-black shadow-lg dark:bg-gray-800 dark:text-white"
        styles={{
          header: { borderBottom: "none" },
          body: { padding: "0px 20px 0 20px" },
        }}
        title={
          <div className="flex justify-between items-center text-black dark:text-white">
            <p>{submitted ? "Thanks!" : "Join our Newsletter"}</p>
            <CloseOutlined onClick={onClose} className="cursor-pointer" />
          </div>
        }
      >
        {!submitted && (
          <Form
            form={form}
            onFinish={onFinish}
            className="flex flex-col"
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Your email"
                className="bg-white text-black placeholder-gray-400 dark:placeholder-white flex-grow"
              />
            </Form.Item>
            <Form.Item className="w-full flex justify-center">
              <Button
                type="primary"
                className="focus:outline-none flex items-center justify-center "
                style={{
                  backgroundColor: "#00c394",
                  borderColor: "#00c394",
                  minWidth: "120px",
                }}
                htmlType="submit"
                disabled={loading}
              >
                {loading ? <Spin /> : "Subscribe"}
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default FloatingSubscribeCard;
