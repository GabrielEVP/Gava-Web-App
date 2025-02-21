'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Building2,
  Contact,
  CreditCard,
  FileText,
  MapPin,
  User,
} from 'lucide-react'

export default function ClientForm() {
  const [activeTab, setActiveTab] = useState('basic')

  return (
    <div className="container max-w-3xl py-6">
      <Card>
        <CardContent className="p-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="basic" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Básico</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Contact className="h-4 w-4" />
                <span className="hidden sm:inline">Contacto</span>
              </TabsTrigger>
              <TabsTrigger value="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Dirección</span>
              </TabsTrigger>
              <TabsTrigger value="banking" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Bancario</span>
              </TabsTrigger>
              <TabsTrigger value="credit" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Crédito</span>
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Notas</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="code">Código *</Label>
                  <Input id="code" placeholder="Escribe el código" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID *</Label>
                  <Input id="taxId" placeholder="Escribe el Tax ID" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="legalName">Nombre Legal *</Label>
                <Input
                  id="legalName"
                  placeholder="Escribe el nombre legal"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="clientType">Tipo de Cliente</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="natural">Natural</SelectItem>
                      <SelectItem value="juridico">Jurídico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">País</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ve">🇻🇪 Venezuela</SelectItem>
                      <SelectItem value="co">🇨🇴 Colombia</SelectItem>
                      <SelectItem value="pe">🇵🇪 Perú</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <div className="space-y-2">
                <Label>Teléfonos</Label>
                <div className="grid gap-2">
                  <Input placeholder="Teléfono principal" />
                  <Input placeholder="Teléfono secundario" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Correos electrónicos</Label>
                <div className="grid gap-2">
                  <Input type="email" placeholder="Correo principal" />
                  <Input type="email" placeholder="Correo secundario" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="address" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Textarea id="address" placeholder="Escribe la dirección" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" placeholder="Escribe el Estado" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Ciudad</Label>
                  <Input id="city" placeholder="Escribe la Ciudad" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="municipality">Municipio</Label>
                  <Input id="municipality" placeholder="Escribe el Municipio" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="banking" className="space-y-4">
              <div className="space-y-2">
                <Label>Cuentas Bancarias</Label>
                <div className="grid gap-2">
                  <Input placeholder="Número de cuenta #1" />
                  <Input placeholder="Número de cuenta #2" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="credit" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="creditDays">Días de Crédito</Label>
                  <Input
                    type="number"
                    id="creditDays"
                    placeholder="0"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="creditLimit">Límite de Crédito</Label>
                  <Input
                    type="number"
                    id="creditLimit"
                    placeholder="0"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Tasa de Impuesto por Defecto</Label>
                  <Input type="number" id="taxRate" placeholder="0" min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Descuento por Defecto</Label>
                  <Input type="number" id="discount" placeholder="0" min="0" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea
                  id="notes"
                  placeholder="Escribe las notas"
                  className="min-h-[150px]"
                />
              </div>
            </TabsContent>

            <div className="flex gap-2 justify-end pt-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Aceptar</Button>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
