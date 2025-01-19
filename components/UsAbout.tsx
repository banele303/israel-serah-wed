import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { HeartHandshake, Clock, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="font-serif text-5xl tracking-tight text-gray-900 animate-fade-in">
            The Wedding Story
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Traditional and White Wedding
          </p>
          <div className="flex justify-center items-center space-x-4 pt-4">
            <Separator className="w-24" />
            <span className="text-2xl font-serif text-gray-800">26 APRIL 2025</span>
            <Separator className="w-24" />
          </div>
        </div>

        {/* Main Content */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Save the Date
              </h2>
              <div className="font-handwriting text-3xl text-gray-800 mb-8">
                Israel and Sarah
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="flex items-center gap-4">
                <HeartHandshake className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <p>
                  Join us for a day where two hearts and two cultures intertwine in a celebration of love. 
                  We invite you to witness the beautiful union of our families and traditions.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <p>
                  Together, we'll pledge our eternal vows before the Lord, sealing our God-written love story. 
                  A day filled with joy, faith, and deep connection.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">PRETORIA</p>
                  <p>10AM TILL LATE</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Separator className="my-6" />
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Theme: White, Cream, Ivory and a touch of African print</span>
                <span className="font-handwriting text-xl">Easy to love</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs