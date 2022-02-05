<?php
include ('smtp/PHPMailerAutoload.php');
if (isset($_POST['form_submitted']))
{
    $name = $_POST['name'];
    $service = $_POST['service'];
    $contact = $_POST['phone'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $msg = $_POST['message'];
    $subject = "New message on contact from " . $name;
    $to = 'info@dcove.co.in';
    $email = $_POST['email'];

    function smtp_mailer($to, $subject, $email, $name, $service, $contact, $country, $state, $city, $msg)
    {

        $body = 'Name: ' . $name . '<br>Email: ' . $email . '<br>Service Intrested In: ' . $service . '<br>Phone: ' . $contact . '<br>Country: ' . $country . '<br>state: ' . $state . '<br>City: ' . $city . '<br>Message: ' . $msg;
        // echo $body;
        $mail = new PHPMailer();
        // $mail->SMTPDebug=3;
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'ssl';
        $mail->Host = "mail.dcove.co.in";
        $mail->Port = "465";
        $mail->IsHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Username = "care@dcove.co.in";
        $mail->Password = 'Dc11In22$$##';
        $mail->SetFrom("care@dcove.co.in");
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($to);
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => false
            )
        );
        if (!$mail->Send())
        {
            // echo $mail->ErrorInfo;
            echo '<script>alert("Error in sending Email, please use chatbot, or mail us at info@dcove.co.in")</script>';
        }
        else
        {
            echo '<script>alert("Your mail has been sent. Thank you for connecting. We will get back to you soon!")</script>';
        }
    }
    smtp_mailer($to, $subject, $email, $name, $service, $contact, $country, $state, $city, $msg);
}
?>