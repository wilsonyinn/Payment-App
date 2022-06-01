package dto;

import org.bson.Document;

public class PaymentDto {
    String to;
    String from;
    Double amount;
    String type;
    String note;

    void setTo(String to){
        this.to = to;
    }

    public static PaymentDto fromDocument(Document document) {
        PaymentDto dto = new PaymentDto();
        dto.setTo(document.getString("to"));
        dto.setFrom(document.getString("from"));
        dto.setAmount(document.getDouble("amount"));
        dto.setType(document.getString("type"));
        dto.setNote(document.getString("note"));

        return dto;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
