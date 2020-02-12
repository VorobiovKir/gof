import { soapRequest } from "./soapRequest";
import { ICalculator } from "./ICalculator";

const parseString = require('xml2js').parseString;

export class CalculatorFacade implements ICalculator {
  private url: string = 'http://www.dneonline.com/calculator.asmx'
  private headers: Record<string, string> = {
    'Content-Type': 'application/soap+xml; charset=UTF-8',
  }

  private getXMLTemplate = (xmlTemplate: string): string => {
    return `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        ${xmlTemplate}
      </soap12:Body>
    </soap12:Envelope>`;
  }

  private async makeRequest(xml: string): Promise<string> {
    // @ts-ignore
    const { response } = await soapRequest({ headers: this.headers, url: this.url, xml });
    return response.body;
  }

  private async getBodyResult(body: string, action: string): Promise<number> {
    let result: number;
    await parseString(body, (err, res) => {
      result = +res['soap:Envelope']['soap:Body'][0][`${action}Response`][0][`${action}Result`][0]; 
    });
    return result;
  }

  async sum(a: number, b: number): Promise<number> {
    const sumXMLTemplate = `<Add xmlns="http://tempuri.org/">
      <intA>${a}</intA>
      <intB>${b}</intB>
    </Add>`;

    const mainTemplate = this.getXMLTemplate(sumXMLTemplate);
    const body = await this.makeRequest(mainTemplate);
    
    return await this.getBodyResult(body, 'Add');
  }

  async substract(a: number, b: number): Promise<number> {
    const subtractXMLTemplate = `<Subtract xmlns="http://tempuri.org/">
      <intA>${a}</intA>
      <intB>${b}</intB>
    </Subtract>`;

    const mainTemplate = this.getXMLTemplate(subtractXMLTemplate);
    const body = await this.makeRequest(mainTemplate);
    
    return await this.getBodyResult(body, 'Subtract');
  }

  async divide(a: number, b: number): Promise<number> {
    const dividetXMLTemplate = `<Divide xmlns="http://tempuri.org/">
      <intA>${a}</intA>
      <intB>${b}</intB>
    </Divide>`;

    const mainTemplate = this.getXMLTemplate(dividetXMLTemplate);
    const body = await this.makeRequest(mainTemplate);
    
    return await this.getBodyResult(body, 'Divide');
  }

  async multiply(a: number, b: number): Promise<number> {
    const multiplytXMLTemplate = `<Multiply xmlns="http://tempuri.org/">
      <intA>${a}</intA>
      <intB>${b}</intB>
    </Multiply>`;

    const mainTemplate = this.getXMLTemplate(multiplytXMLTemplate);
    const body = await this.makeRequest(mainTemplate);
    
    return await this.getBodyResult(body, 'Multiply');
  }
}

const facade = new CalculatorFacade();
(async () => {
  console.log(
    await facade.sum(10, 5),
    await facade.substract(20, 3),
    await facade.divide(30, 10),
    await facade.multiply(15, 15),
  )
})()