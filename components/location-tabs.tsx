"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { company } from "@/lib/site-data";

const locations = [
  {
    value: "headquarters",
    label: "본사",
    address: company.headquarters,
    mapQuery:
      "경기도 성남시 중원구 사기막골로 124 SKn타워 비즈센터동 513호",
  },
  {
    value: "laboratory",
    label: "부설연구소",
    address: company.laboratory,
    mapQuery: "서울시 마포구 백범로 35 서강대학교 떼이야르관 705호",
  },
];

export function LocationTabs() {
  return (
    <Tabs defaultValue="headquarters" className="location-tabs">
      <TabsList className="location-tab-list" aria-label="사업장 선택">
        {locations.map((location) => (
          <TabsTrigger key={location.value} value={location.value}>
            {location.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {locations.map((location) => (
        <TabsContent key={location.value} value={location.value}>
          <section className="location-panel">
            <div className="location-copy">
              <p className="section-kicker">DASUN TECH LOCATION</p>
              <h2>{location.label}</h2>
              <dl>
                <div>
                  <dt>
                    <MapPin aria-hidden="true" /> 주소
                  </dt>
                  <dd>{location.address}</dd>
                </div>
                <div>
                  <dt>
                    <Phone aria-hidden="true" /> 대표전화
                  </dt>
                  <dd>
                    <a href={`tel:${company.phone.replaceAll("-", "")}`}>
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>
                    <Mail aria-hidden="true" /> 이메일
                  </dt>
                  <dd>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="map-frame">
              <iframe
                title={`${location.label} 지도`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </TabsContent>
      ))}
    </Tabs>
  );
}
