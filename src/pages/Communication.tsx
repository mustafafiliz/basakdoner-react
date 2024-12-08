import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Communication = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <img
        src="/images/döner2.jpg"
        alt="döner"
        className="w-full h-[400px] object-cover"
      />
      <div className="w-full bg-red-800 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="flex items-center space-x-4">
            <MapPin className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Adres</h3>
              <p className="text-gray-100">Ataşehir Mh. Beyoğlusu Cd.</p>
              <p className="text-gray-100">No:75/B İstanbul</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">İletişim</h3>
              <p className="text-gray-100">Tel: +90 216 329 35 40</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">E-Mail</h3>
              <p className="text-gray-100">info@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div>
              <Input
                label="Kullanıcı Adı ve Soyadı"
                placeholder="Adınız, Soyadınız"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="E-mail"
                type="email"
                placeholder="E-Mail Adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Input
                label="Telefon"
                type="text"
                placeholder="Telefon Numaranız"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                label="Konu"
                type="text"
                placeholder="Konu"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <TextArea
                value={message}
                label="Mesajınız"
                placeholder="Mesajınız"
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px]"
              />
            </div>
            <Button fullWidth isLoading={false} variant="danger">
              Gönder
            </Button>
          </form>

          <div className="w-full h-[400px] bg-gray-100 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Google Maps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
