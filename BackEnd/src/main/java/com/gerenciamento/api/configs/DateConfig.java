package com.gerenciamento.api.configs;

import java.io.IOException;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;


public class DateConfig  extends JsonDeserializer<Date> {

    private SimpleDateFormat format = new SimpleDateFormat("HH:mm");

	
    @Override
    public Date deserialize(JsonParser p, DeserializationContext ctxt) 
        throws IOException, JsonProcessingException {

        String date = p.getText();

        try {
            return (Date) format.parse(date);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
	
	
}
